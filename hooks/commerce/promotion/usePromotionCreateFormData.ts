"use client";

import { BookingTypeService } from "@/services/commerce/booking-type/client";
import { PromotionService } from "@/services/commerce/promotion/client";
import { useQuery } from "@tanstack/react-query";

export const usePromotionCreateFormData = (enabled = true) => {
  return useQuery({
    queryKey: ["promotion-create"],
    enabled,
    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const [bookingTypeData] = await Promise.all([
        BookingTypeService.getMany(),
      ]);

      return {
        bookingTypeData,
      };
    },
  });
};
