"use client";

import { useQuery } from "@tanstack/react-query";

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

    isLoading: query.isLoading,
    isFetching: query.isFetching,

    isError: query.isError,
    errors: {
      seatType: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};
