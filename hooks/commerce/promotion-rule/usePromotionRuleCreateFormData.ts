"use client";

import { BookingTypeService } from "@/services/commerce/booking-type/client";
import { PromotionService } from "@/services/commerce/promotion/client";

import { useQuery } from "@tanstack/react-query";

export const usePromotionRuleCreateFormData = (
  enabled = true,
) => {
  return useQuery({
    queryKey: ["promotion-rule-create"],

    enabled,

    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const [bookingTypeData,promotionData] = await Promise.all([
        BookingTypeService.getMany(),
        PromotionService.getMany()
      ]);

      return {
        bookingTypeData,
        promotionData
      };
    },
  });
};