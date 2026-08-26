"use client";

import { HotelService } from "@/services/product-types/hotel/client";
import { HotelCheckInPolicyService } from "@/services/product-types/hotel/hotel-check-in-policy/client";
import { useQuery } from "@tanstack/react-query";

export const useHotelCheckInPolicyUpdateFormData = (
  id: string,
  enabled = true,
) => {
  const query = useQuery({
    queryKey: ["hotel-check-in-policy-update-form-data", id],
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
    queryFn: async () => {
      const [initialData, hotels] = await Promise.all([
        HotelCheckInPolicyService.getOne(id),
        HotelService.getMany(),
      ]);

      return {
        initialData,
        hotels,
      };
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
