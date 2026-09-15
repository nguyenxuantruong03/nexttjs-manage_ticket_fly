"use client";

import { useQuery } from "@tanstack/react-query";

import { HotelAccessibilityService } from "@/services/product-types/hotel/hotel-accessibility/client";

import { DEFAULT_QUERY_STALE_TIME } from "@/config/react-query.config";

export const useHotelAccessibilityUpdateFormData = (
  id: string,
  enabled = true,
) => {
  const query = useQuery({
    queryKey: ["hotel-accessibility-update-form-data", id],

    enabled: enabled && Boolean(id),

    staleTime: DEFAULT_QUERY_STALE_TIME,

    queryFn: async () => {
      const [initialData] = await Promise.all([
        HotelAccessibilityService.getOne(id),
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
      accessibility: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};
