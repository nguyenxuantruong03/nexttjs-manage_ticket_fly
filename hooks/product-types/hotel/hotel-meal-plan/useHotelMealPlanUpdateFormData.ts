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

    isLoading: query.isLoading,
    isFetching: query.isFetching,

    isError: query.isError,
    // Chỉ có 1 nguồn dữ liệu (mealPlan) nên lấy thẳng message của nó.
    errors: {
      mealPlan: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};
