"use client";

import { useQuery } from "@tanstack/react-query";

import { FlyCabinClassService } from "@/services/product-types/ticket-fly/cabin-class/client";

export const useFlyCabinClassCreateFormData = (
  enabled = true,
) => {
  const query = useQuery({
    queryKey: ["fly-cabin-class-create-form-data"],
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