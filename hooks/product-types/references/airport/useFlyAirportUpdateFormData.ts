"use client";

import { useQuery } from "@tanstack/react-query";

import { SearchTagService } from "@/services/search/tag/client";
import { useLocationFormData } from "@/hooks/location/useLocationFormData";
import { FlyAirportService } from "@/services/product-types/references/airport/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

export const useFlyAirportUpdateFormData = (
  flyAirportId: string,
  enabled = true,
) => {
  const locationQuery = useLocationFormData(
    ["fly-airport-location-data"],
    enabled && Boolean(flyAirportId),
  );

  const flyAirportQuery = useQuery({
    queryKey: ["fly-airport-update-form-data", flyAirportId],
    enabled: enabled && Boolean(flyAirportId),
    staleTime: DEFAULT_QUERY_STALE_TIME,

    queryFn: async () => {
      const [initialData, searchTagData, airportData] = await Promise.all([
        FlyAirportService.getOne(flyAirportId),
        SearchTagService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        FlyAirportService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
      ]);

      return {
        initialData,
        searchTagData,
        airportData,
      };
    },
  });

  return {
    data:
      locationQuery.data && flyAirportQuery.data
        ? {
            ...flyAirportQuery.data,
            ...locationQuery.data,
          }
        : undefined,

    isLoading: locationQuery.isLoading || flyAirportQuery.isLoading,
    isFetching: locationQuery.isFetching || flyAirportQuery.isFetching,
    isError: locationQuery.isError || flyAirportQuery.isError,

    errors: {
      location: locationQuery.error as Error | null,
      flyAirport: flyAirportQuery.error as Error | null,
    },

    refetch: async () => {
      await Promise.all([locationQuery.refetch(), flyAirportQuery.refetch()]);
    },
  };
};
