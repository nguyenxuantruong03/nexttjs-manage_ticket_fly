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

export const useFlyAirportCreateFormData = (enabled = true) => {
  const locationQuery = useLocationFormData(
    ["fly-airport-location-data"],
    enabled,
  );

  const flyAirportQuery = useQuery({
    queryKey: ["fly-airport-create-form-data"],
    enabled,
    staleTime: DEFAULT_QUERY_STALE_TIME,

    queryFn: async () => {
      const [searchTagData, airportData] = await Promise.all([
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
