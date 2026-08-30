"use client";

import { useQuery } from "@tanstack/react-query";

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

    isLoading: query.isLoading,
    isFetching: query.isFetching,

    isError: query.isError,
    errors: {
      condition: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};
