"use client";

import { useQuery } from "@tanstack/react-query";

export const useFlyAircraftTypeCreateFormData = (enabled = true) => {
  const query = useQuery({
    queryKey: ["fly-aircraft-type-create-form-data"],
    enabled,
    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
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