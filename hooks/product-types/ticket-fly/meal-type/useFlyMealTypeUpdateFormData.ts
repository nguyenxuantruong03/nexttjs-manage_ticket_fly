"use client";

import { useQuery } from "@tanstack/react-query";

import { FlyMealTypeService } from "@/services/product-types/ticket-fly/meal-type/client";

import { DEFAULT_QUERY_STALE_TIME } from "@/config/react-query.config";

export const useFlyMealTypeUpdateFormData = (
  flyMealTypeId: string,
  enabled = true,
) => {
  const query = useQuery({
    queryKey: ["fly-meal-type-update-form-data", flyMealTypeId],
    enabled: enabled && Boolean(flyMealTypeId),
    staleTime: DEFAULT_QUERY_STALE_TIME,

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
    isLoading: query.isLoading,
    isFetching: query.isFetching,
    isError: query.isError,

    errors: {
      mealType: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};
