"use client";

import { useQuery } from "@tanstack/react-query";

import { HotelDiningMealTypeService } from "@/services/product-types/hotel/hotel-dining-meal-type/client";

import { DEFAULT_QUERY_STALE_TIME } from "@/config/react-query.config";

export const useHotelDiningMealTypeUpdateFormData = (
  id: string,
  enabled = true,
) => {
  const query = useQuery({
    queryKey: ["hotel-dining-meal-type-update-form-data", id],
    enabled: enabled && Boolean(id),
    staleTime: DEFAULT_QUERY_STALE_TIME,

    queryFn: async () => {
      const [initialData] = await Promise.all([
        HotelDiningMealTypeService.getOne(id),
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
      diningMealType: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};