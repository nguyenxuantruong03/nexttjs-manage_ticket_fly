"use client";

import { useQuery } from "@tanstack/react-query";

import { SearchTagService } from "@/services/search/tag/client";
import { useLocationFormData } from "@/hooks/location/useLocationFormData";
import { FlyAirportService } from "@/services/ticket-fly/fly-airport/client";

export const useFlyAirportUpdateFormData = (
  flyAirportId: string,
  enabled = true,
) => {
  const locationQuery = useLocationFormData(
    ["fly-airport-location-data"],
    enabled && !!flyAirportId,
  );

  const flyAirportQuery = useQuery({
    queryKey: ["fly-airport-update-form-data", flyAirportId],
    enabled: enabled && !!flyAirportId,
    staleTime: 1000 * 60 * 5,
    queryFn: async () => {
      const [initialData, searchTagData] = await Promise.all([
        FlyAirportService.getOne(flyAirportId),
        SearchTagService.getMany(),
      ]);

      return {
        initialData,
        searchTagData,
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

    isPending: locationQuery.isPending || flyAirportQuery.isPending,
    isLoading: locationQuery.isLoading || flyAirportQuery.isLoading,
    isFetching: locationQuery.isFetching || flyAirportQuery.isFetching,
    isError: locationQuery.isError || flyAirportQuery.isError,
    error: locationQuery.error ?? flyAirportQuery.error,

    refetch: async () => {
      await Promise.all([locationQuery.refetch(), flyAirportQuery.refetch()]);
    },
  };
};
