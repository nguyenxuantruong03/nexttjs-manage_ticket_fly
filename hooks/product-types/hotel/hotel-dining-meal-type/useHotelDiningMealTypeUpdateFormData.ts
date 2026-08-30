"use client";

import { useQuery } from "@tanstack/react-query";

import { HotelDiningMealTypeService } from "@/services/product-types/hotel/hotel-dining-meal-type/client";

export const useHotelDiningMealTypeUpdateFormData = (
  id: string,
  enabled = true,
) => {
  const query = useQuery({
    queryKey: ["hotel-dining-meal-type-update-form-data", id],
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
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
    // Chỉ có 1 nguồn dữ liệu (diningMealType) nên lấy thẳng message
    // của nó.
    errors: {
      diningMealType: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};
