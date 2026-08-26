"use client";

import { BookingTypeService } from "@/services/commerce/booking-type/client";

import { PolicyTypeService } from "@/services/features/policy-type/client";

import { useQuery } from "@tanstack/react-query";

export const usePolicyCreateFormData = (enabled = true) => {
  return useQuery({
    queryKey: ["policy-create"],

    enabled,

    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const [bookingTypeData, policyTypeData] = await Promise.all([
        BookingTypeService.getMany(),

        PolicyTypeService.getMany(),
      ]);

      return {
        bookingTypeData,
        policyTypeData,
      };
    },
  });
};