"use client";

import { useQuery } from "@tanstack/react-query";

import { YachtConditionService } from "@/services/product-types/yacht/condition/client";

export const useYachtConditionCreateFormData = (enabled = true) => {
  const query = useQuery({
    queryKey: ["yacht-condition-create-form-data"],
    enabled,
    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const [] = await Promise.all([]);

      return {};
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
