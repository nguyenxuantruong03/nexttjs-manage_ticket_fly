"use client";

import { HotelPolicyTypeService } from "@/services/hotel/hotel-policy-type/client";
import { useQuery } from "@tanstack/react-query";

export const useHotelPolicyCreateFormData = (enabled = true) => {
  const query = useQuery({
    queryKey: ["hotel-policy-create-form-data"],
    enabled,
    staleTime: 1000 * 60 * 5,
    queryFn: async () => {
      const [policyType] = await Promise.all([
        HotelPolicyTypeService.getMany(),
      ]);

      return {
        policyType
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
