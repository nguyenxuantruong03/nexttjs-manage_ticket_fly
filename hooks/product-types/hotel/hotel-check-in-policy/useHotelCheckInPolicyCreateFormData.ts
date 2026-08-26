"use client";

import { HotelService } from "@/services/product-types/hotel/client";
import { useQuery } from "@tanstack/react-query";

export const useHotelCheckInPolicyCreateFormData = (enabled = true) => {
  const query = useQuery({
    queryKey: ["hotel-check-in-policy-create-form-data"],
    enabled,
    staleTime: 1000 * 60 * 5,
    queryFn: async () => {
      const [hotels] = await Promise.all([HotelService.getMany()]);

      return { hotels };
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
