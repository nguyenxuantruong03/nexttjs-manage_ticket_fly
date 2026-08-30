"use client";

import { useQuery } from "@tanstack/react-query";

import { SearchTagService } from "@/services/search/tag/client";
import { useLocationFormData } from "@/hooks/location/useLocationFormData";
import { FlyAirportService } from "@/services/product-types/references/airport/client";

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
      const [initialData, searchTagData, airportData] = await Promise.all([
        FlyAirportService.getOne(flyAirportId),
        SearchTagService.getMany(),
        FlyAirportService.getMany(),
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
    // Có 2 nguồn dữ liệu độc lập (location + airport/search-tag, gồm
    // cả initialData) nên tách 2 key riêng để biết lỗi đến từ đâu.
    errors: {
      location: locationQuery.error as Error | null,
      flyAirport: flyAirportQuery.error as Error | null,
    },

    refetch: async () => {
      await Promise.all([locationQuery.refetch(), flyAirportQuery.refetch()]);
    },
  };
};
