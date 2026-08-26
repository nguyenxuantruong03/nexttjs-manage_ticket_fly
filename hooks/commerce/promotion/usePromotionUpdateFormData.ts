"use client";

import { BookingTypeService } from "@/services/commerce/booking-type/client";
import { PromotionService } from "@/services/commerce/promotion/client";
import { useQuery } from "@tanstack/react-query";

export const usePromotionUpdateFormData = (
  promotionId: string,
  enabled = true,
) => {
  return useQuery({
    queryKey: ["promotion-update", promotionId],

    enabled: enabled && !!promotionId,

    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const [promotionData, bookingTypeData] = await Promise.all([
        PromotionService.getOne(promotionId),
        BookingTypeService.getMany(),
      ]);

      return {
        promotionData,
        bookingTypeData,
      };
    },
  });
};
