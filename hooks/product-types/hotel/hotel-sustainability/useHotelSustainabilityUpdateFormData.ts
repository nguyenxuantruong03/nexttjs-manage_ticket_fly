"use client";

import { useQuery } from "@tanstack/react-query";

import { HotelSustainabilityService } from "@/services/product-types/hotel/hotel-sustainability/client";

import { DEFAULT_QUERY_STALE_TIME } from "@/config/react-query.config";

export const useHotelSustainabilityUpdateFormData = (
  id: string,
  enabled = true,
) => {
  const query = useQuery({
    queryKey: ["hotel-sustainability-update-form-data", id],
    enabled: enabled && Boolean(id),
    staleTime: DEFAULT_QUERY_STALE_TIME,

    queryFn: async () => {
      const [initialData] = await Promise.all([
        HotelSustainabilityService.getOne(id),
      ]);

      return {
        initialData,
      };
    },
  });

  return {
    data: query.data,
    isLoading: query.isLoading,
    isFetching: query.isFetching,
    isError: query.isError,

    errors: {
      sustainability: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};
