"use client";

import { BookingTypeService } from "@/services/commerce/booking-type/client";
import { CouponService } from "@/services/commerce/coupon/client";
import { useQuery } from "@tanstack/react-query";

export const useCouponUpdateFormData = (couponId: string, enabled = true) => {
  return useQuery({
    queryKey: ["coupon-update", couponId],

    enabled: enabled && !!couponId,

    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const [couponData, bookingTypeData] = await Promise.all([
        CouponService.getOne(couponId),
        BookingTypeService.getMany(),
      ]);

      return {
        couponData,
        bookingTypeData,
      };
    },
  });
};
