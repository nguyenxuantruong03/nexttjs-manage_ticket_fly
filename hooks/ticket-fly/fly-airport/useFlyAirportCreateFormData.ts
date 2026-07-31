"use client";

import { useQuery } from "@tanstack/react-query";

import { SearchTagService } from "@/services/search/tag/client";
import { useLocationFormData } from "@/hooks/location/useLocationFormData";
import { FlyAirportService } from "@/services/ticket-fly/fly-airport/client";

export const useFlyAirportCreateFormData = (enabled = true) => {
  const locationQuery = useLocationFormData(
    ["fly-airport-location-data"],
    enabled,
  );

  const flyAirportQuery = useQuery({
    queryKey: ["fly-airport-create-form-data"],
    enabled,
    staleTime: 1000 * 60 * 5,
    queryFn: async () => {
      const [searchTagData, airports] = await Promise.all([
        SearchTagService.getMany(),
        FlyAirportService.getMany(),
      ]);

      return {
        searchTagData,
        airports,
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
