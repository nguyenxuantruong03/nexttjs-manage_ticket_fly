"use client";

import { useQuery } from "@tanstack/react-query";

import { DEFAULT_QUERY_STALE_TIME } from "@/config/react-query.config";

export const useFlyFareRuleTypeCreateFormData = (enabled = true) => {
  const query = useQuery({
    queryKey: ["fly-fare-rule-type-create-form-data"],
    enabled,
    staleTime: DEFAULT_QUERY_STALE_TIME,

    queryFn: async () => {
      const [] = await Promise.all([]);

      return {};
    },
  });

  return {
    data: query.data,
    isLoading: query.isLoading,
    isFetching: query.isFetching,
    isError: query.isError,

    errors: {
      fareRuleType: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};
