"use client";

import { useQuery } from "@tanstack/react-query";

import { DEFAULT_QUERY_STALE_TIME } from "@/config/react-query.config";

export const useFlyAllianceCreateFormData = (enabled = true) => {
  const query = useQuery({
    queryKey: ["fly-alliance-create-form-data"],
    enabled,
    staleTime: DEFAULT_QUERY_STALE_TIME,

    queryFn: async () => {
      return {};
    },
  });

  return {
    data: query.data,
    isLoading: query.isLoading,
    isFetching: query.isFetching,
    isError: query.isError,

    errors: {
      alliance: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};
