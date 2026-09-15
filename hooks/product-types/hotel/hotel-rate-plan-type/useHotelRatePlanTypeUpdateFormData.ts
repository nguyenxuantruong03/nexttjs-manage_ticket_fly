"use client";

import { useQuery } from "@tanstack/react-query";

import { HotelRatePlanTypeService } from "@/services/product-types/hotel/hotel-rate-plan-type/client";

import { DEFAULT_QUERY_STALE_TIME } from "@/config/react-query.config";

export const useHotelRatePlanTypeUpdateFormData = (
  id: string,
  enabled = true,
) => {
  const query = useQuery({
    queryKey: ["hotel-rate-plan-type-update-form-data", id],
    enabled: enabled && Boolean(id),
    staleTime: DEFAULT_QUERY_STALE_TIME,

    queryFn: async () => {
      const [initialData] = await Promise.all([
        HotelRatePlanTypeService.getOne(id),
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
      ratePlanType: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};