"use client";

import { useQuery } from "@tanstack/react-query";

import { HotelMealPlanService } from "@/services/product-types/hotel/hotel-meal-plan/client";

import { DEFAULT_QUERY_STALE_TIME } from "@/config/react-query.config";

export const useHotelMealPlanUpdateFormData = (id: string, enabled = true) => {
  const query = useQuery({
    queryKey: ["hotel-meal-plan-update-form-data", id],
    enabled: enabled && Boolean(id),
    staleTime: DEFAULT_QUERY_STALE_TIME,

    queryFn: async () => {
      const [initialData] = await Promise.all([
        HotelMealPlanService.getOne(id),
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
      mealPlan: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};
