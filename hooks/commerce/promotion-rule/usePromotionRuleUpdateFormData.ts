"use client";

import { BookingTypeService } from "@/services/commerce/booking-type/client";

import { PromotionRuleService } from "@/services/commerce/promotion-rule/client";
import { PromotionService } from "@/services/commerce/promotion/client";

import { useQuery } from "@tanstack/react-query";

export const usePromotionRuleUpdateFormData = (
  promotionRuleId: string,
  enabled = true,
) => {
  return useQuery({
    queryKey: ["promotion-rule-update", promotionRuleId],

    enabled: enabled && !!promotionRuleId,

    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const [promotionRuleData, promotionData, bookingTypeData] =
        await Promise.all([
          PromotionRuleService.getOne(promotionRuleId),
          PromotionService.getMany(),
          BookingTypeService.getMany(),
        ]);

      return {
        promotionRuleData,
        promotionData,
        bookingTypeData,
      };
    },
  });
};
