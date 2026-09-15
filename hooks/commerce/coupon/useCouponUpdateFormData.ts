"use client";

import { useCoupon } from "@/hooks/commerce/coupon";

import { useBookingTypes } from "@/hooks/commerce/booking-type";

import { DEFAULT_LIMIT, DEFAULT_PAGE } from "@/config/react-query.config";

// ======================================================
// UPDATE FORM DATA
// ======================================================

export const useCouponUpdateFormData = (couponId: string, enabled = true) => {
  const couponQuery = useCoupon(couponId, enabled);

  const bookingTypeQuery = useBookingTypes(
    DEFAULT_PAGE,
    DEFAULT_LIMIT,
    enabled,
  );

  return {
    // ==================================================
    // DATA
    // ==================================================

    data:
      couponQuery.data && bookingTypeQuery.data
        ? {
            couponData: couponQuery.data,
            bookingTypeData: bookingTypeQuery.data,
          }
        : undefined,

    // ==================================================
    // LOADING
    // ==================================================

    isLoading: couponQuery.isLoading || bookingTypeQuery.isLoading,

    isFetching: couponQuery.isFetching || bookingTypeQuery.isFetching,

    // ==================================================
    // ERROR
    // ==================================================

    isError: couponQuery.isError || bookingTypeQuery.isError,

    errors: {
      coupon: couponQuery.error as Error | null,

      bookingType: bookingTypeQuery.error as Error | null,
    },

    // ==================================================
    // REFETCH
    // ==================================================

    refetch: async () => {
      await Promise.all([couponQuery.refetch(), bookingTypeQuery.refetch()]);
    },
  };
};
