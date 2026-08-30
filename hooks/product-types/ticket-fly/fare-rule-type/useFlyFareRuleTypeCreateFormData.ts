"use client";

import { useQuery } from "@tanstack/react-query";

export const useFlyFareRuleTypeCreateFormData = (enabled = true) => {
  const query = useQuery({
    queryKey: ["fly-fare-rule-type-create-form-data"],
    enabled,

    staleTime: 1000 * 60 * 5,

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
