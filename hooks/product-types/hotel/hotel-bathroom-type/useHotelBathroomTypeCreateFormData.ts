"use client";

import { useQuery } from "@tanstack/react-query";

import { DEFAULT_QUERY_STALE_TIME } from "@/config/react-query.config";

export const useHotelBathroomTypeCreateFormData = (enabled = true) => {
  const query = useQuery({
    queryKey: ["bathroom-type-create-form-data"],
    enabled,
    staleTime: DEFAULT_QUERY_STALE_TIME,

    queryFn: async () => {
      await Promise.all([]);

      return {};
    },
  });

  return {
    data: query.data,
    isLoading: query.isLoading,
    isFetching: query.isFetching,
    isError: query.isError,

    errors: {
      bathroomType: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};
