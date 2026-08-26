"use client";

import { BookingTypeService } from "@/services/commerce/booking-type/client";

import { ExtraFeeTypeService } from "@/services/commerce/extra-fee-type/client";

import { useQuery } from "@tanstack/react-query";

export const useExtraFeeTypeUpdateFormData = (
  extraFeeTypeId: string,
  enabled = true,
) => {
  return useQuery({
    queryKey: ["extra-fee-type-update", extraFeeTypeId],

    enabled: enabled && !!extraFeeTypeId,

    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const [extraFeeTypeData, bookingTypes] = await Promise.all([
        ExtraFeeTypeService.getOne(extraFeeTypeId),
        BookingTypeService.getMany(),
      ]);

      return {
        extraFeeTypeData,
        bookingTypes,
      };
    },
  });
};
