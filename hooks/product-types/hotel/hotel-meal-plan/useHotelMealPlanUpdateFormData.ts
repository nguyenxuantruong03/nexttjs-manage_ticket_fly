"use client";

import { HotelMealPlanService } from "@/services/product-types/hotel/hotel-meal-plan/client";
import { useQuery } from "@tanstack/react-query";

export const useHotelMealPlanUpdateFormData = (id: string, enabled = true) => {
  const query = useQuery({
    queryKey: ["hotel-meal-plan-update-form-data", id],
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
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

    isPending: query.isPending,
    isLoading: query.isLoading,
    isFetching: query.isFetching,
    isError: query.isError,
    error: query.error,

    refetch: query.refetch,
  };
};
