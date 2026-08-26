"use client";

import { useQuery } from "@tanstack/react-query";

import { FlyMealTypeService } from "@/services/product-types/ticket-fly/meal-type/client";

export const useFlyMealTypeUpdateFormData = (
  flyMealTypeId: string,
  enabled = true,
) => {
  const query = useQuery({
    queryKey: ["fly-meal-type-update-form-data", flyMealTypeId],

    enabled: enabled && !!flyMealTypeId,

    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const [initialData] = await Promise.all([
        FlyMealTypeService.getOne(flyMealTypeId),
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
