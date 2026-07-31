"use client";

import { HotelPolicyTypeService } from "@/services/hotel/hotel-policy-type/client";
import { HotelPolicyService } from "@/services/hotel/hotel-policy/client";
import { useQuery } from "@tanstack/react-query";

export const useHotelPolicyUpdateFormData = (id: string, enabled = true) => {
  const query = useQuery({
    queryKey: ["hotel-policy-update-form-data", id],
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
    queryFn: async () => {
      const [initialData, policyType] = await Promise.all([
        HotelPolicyService.getOne(id),
        HotelPolicyTypeService.getMany(),
      ]);

      return {
        initialData,
        policyType,
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
