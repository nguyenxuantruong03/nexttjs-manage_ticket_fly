"use client";

import { BookingTypeService } from "@/services/commerce/booking-type/client";

import { PolicyTypeService } from "@/services/features/policy-type/client";

import { PolicyService } from "@/services/features/policy/client";

import { useQuery } from "@tanstack/react-query";

export const usePolicyUpdateFormData = (
  policyId: string,
  enabled = true,
) => {
  return useQuery({
    queryKey: ["policy-update", policyId],

    enabled: enabled && !!policyId,

    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const [policyData, policyTypeData, bookingTypeData] =
        await Promise.all([
          PolicyService.getOne(policyId),
          PolicyTypeService.getMany(),
          BookingTypeService.getMany(),
        ]);

      return {
        policyData,
        policyTypeData,
        bookingTypeData,
      };
    },
  });
};