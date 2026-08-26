"use client";

import { BookingTypeService } from "@/services/commerce/booking-type/client";
import { CouponService } from "@/services/commerce/coupon/client";
import { useQuery } from "@tanstack/react-query";

export const useCouponCreateFormData = (enabled = true) => {
  return useQuery({
    queryKey: ["coupon-create"],
    enabled,
    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const [bookingTypeData] = await Promise.all([
        BookingTypeService.getMany(),
      ]);

      return { bookingTypeData };
    },
  });
};
