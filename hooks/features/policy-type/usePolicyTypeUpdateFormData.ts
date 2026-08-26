"use client";

import { BookingTypeService } from "@/services/commerce/booking-type/client";
import { PolicyTypeService } from "@/services/features/policy-type/client";

import { useQuery } from "@tanstack/react-query";

export const usePolicyTypeUpdateFormData = (
  policyTypeId: string,
  enabled = true,
) => {
  return useQuery({
    queryKey: ["policy-type-update", policyTypeId],

    enabled: enabled && !!policyTypeId,

    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const [policyTypeData, bookingTypeData] = await Promise.all([
        PolicyTypeService.getOne(policyTypeId),
        BookingTypeService.getMany(),
      ]);

      return {
        policyTypeData,
        bookingTypeData,
      };
    },
  });
};
