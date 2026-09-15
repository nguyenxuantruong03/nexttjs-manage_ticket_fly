"use client";

import { useQuery } from "@tanstack/react-query";

import { YachtConditionService } from "@/services/product-types/yacht/condition/client";

import { DEFAULT_QUERY_STALE_TIME } from "@/config/react-query.config";

export const useYachtConditionUpdateFormData = (
  yachtConditionId: string,
  enabled = true,
) => {
  const query = useQuery({
    queryKey: ["yacht-condition-update-form-data", yachtConditionId],
    enabled: enabled && Boolean(yachtConditionId),
    staleTime: DEFAULT_QUERY_STALE_TIME,

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
    isLoading: query.isLoading,
    isFetching: query.isFetching,
    isError: query.isError,

    errors: {
      condition: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};
