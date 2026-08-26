"use client";

import { useQuery } from "@tanstack/react-query";

export const useFlyCrewRoleCreateFormData = (enabled = true) => {
  const query = useQuery({
    queryKey: ["fly-crew-role-create-form-data"],

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
