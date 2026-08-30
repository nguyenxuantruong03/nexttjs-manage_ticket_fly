"use client";

import { useCoupon } from "@/hooks/commerce/coupon";
import { useBookingTypes } from "@/hooks/commerce/booking-type";

export const useCouponUpdateFormData = (couponId: string, enabled = true) => {
  const couponQuery = useCoupon(couponId, enabled);
  const bookingTypeQuery = useBookingTypes(enabled);

  return {
    data:
      couponQuery.data && bookingTypeQuery.data
        ? {
            couponData: couponQuery.data,
            bookingTypeData: bookingTypeQuery.data,
          }
        : undefined,

    isLoading: couponQuery.isLoading || bookingTypeQuery.isLoading,
    isFetching: couponQuery.isFetching || bookingTypeQuery.isFetching,

    isError: couponQuery.isError || bookingTypeQuery.isError,
    errors: {
      coupon: couponQuery.error as Error | null,
      bookingType: bookingTypeQuery.error as Error | null,
    },

    refetch: async () => {
      await Promise.all([couponQuery.refetch(), bookingTypeQuery.refetch()]);
    },
  };
};
