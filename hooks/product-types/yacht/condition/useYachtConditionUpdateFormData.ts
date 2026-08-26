"use client";

import { useQuery } from "@tanstack/react-query";

import { YachtConditionService } from "@/services/product-types/yacht/condition/client";

export const useYachtConditionUpdateFormData = (
  yachtConditionId: string,
  enabled = true,
) => {
  const query = useQuery({
    queryKey: ["yacht-condition-update-form-data", yachtConditionId],
    enabled: enabled && !!yachtConditionId,
    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const [initialData] = await Promise.all([
        YachtConditionService.getOne(yachtConditionId),
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