"use client";

import { useQuery } from "@tanstack/react-query";

import { HotelService } from "@/services/product-types/hotel/client";
import { HotelCheckInPolicyService } from "@/services/product-types/hotel/hotel-check-in-policy/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

export const useHotelCheckInPolicyUpdateFormData = (
  id: string,
  enabled = true,
) => {
  const query = useQuery({
    queryKey: ["hotel-check-in-policy-update-form-data", id],
    enabled: enabled && Boolean(id),
    staleTime: DEFAULT_QUERY_STALE_TIME,

    queryFn: async () => {
      const [initialData, hotels] = await Promise.all([
        HotelCheckInPolicyService.getOne(id),
        HotelService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
      ]);

      return {
        initialData,
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
      checkInPolicy: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};
