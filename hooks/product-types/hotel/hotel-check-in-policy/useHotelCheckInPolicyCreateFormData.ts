"use client";

import { useQuery } from "@tanstack/react-query";

import { HotelService } from "@/services/product-types/hotel/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

export const useHotelCheckInPolicyCreateFormData = (enabled = true) => {
  const query = useQuery({
    queryKey: ["hotel-check-in-policy-create-form-data"],
    enabled,
    staleTime: DEFAULT_QUERY_STALE_TIME,

    queryFn: async () => {
      const [hotels] = await Promise.all([
        HotelService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
      ]);

      return {
        hotels,
      };
    },
  });

  return {
    data: query.data,
    isLoading: query.isLoading,
    isFetching: query.isFetching,
    isError: query.isError,

    errors: {
      hotel: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};
