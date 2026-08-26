"use client";

import { useQuery } from "@tanstack/react-query";

import { FlySeatTypeService } from "@/services/product-types/ticket-fly/seat-type/client";

export const useFlySeatTypeCreateFormData = (enabled = true) => {
  const query = useQuery({
    queryKey: ["fly-seat-type-create-form-data"],
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
