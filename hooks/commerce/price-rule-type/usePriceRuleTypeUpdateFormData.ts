"use client";

import { BookingTypeService } from "@/services/commerce/booking-type/client";
import { PriceRuleTypeService } from "@/services/commerce/price-rule-type/client";

import { useQuery } from "@tanstack/react-query";

export const usePriceRuleTypeUpdateFormData = (
  priceRuleTypeId: string,
  enabled = true,
) => {
  return useQuery({
    queryKey: ["price-rule-type-update", priceRuleTypeId],

    enabled: enabled && !!priceRuleTypeId,

    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const [priceRuleTypeData, bookingTypes] = await Promise.all([
        PriceRuleTypeService.getOne(priceRuleTypeId),
        BookingTypeService.getMany(),
      ]);

      return {
        priceRuleTypeData,
        bookingTypes,
      };
    },
  });
};
