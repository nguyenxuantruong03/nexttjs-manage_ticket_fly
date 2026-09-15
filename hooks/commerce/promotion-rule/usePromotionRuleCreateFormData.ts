"use client";

import { useBookingTypes } from "@/hooks/commerce/booking-type";
import { usePromotions } from "@/hooks/commerce/promotion";

import { DEFAULT_LIMIT, DEFAULT_PAGE } from "@/config/react-query.config";

// ======================================================
// CREATE FORM DATA
// ======================================================

export const usePromotionRuleCreateFormData = (enabled = true) => {
  const bookingTypeQuery = useBookingTypes(
    DEFAULT_PAGE,
    DEFAULT_LIMIT,
    enabled,
  );

  const promotionQuery = usePromotions(DEFAULT_PAGE, DEFAULT_LIMIT, enabled);

  return {
    // ==================================================
    // DATA
    // ==================================================

    data:
      bookingTypeQuery.data && promotionQuery.data
        ? {
            bookingTypeData: bookingTypeQuery.data,

            promotionData: promotionQuery.data,
          }
        : undefined,

    // ==================================================
    // LOADING
    // ==================================================

    isLoading: bookingTypeQuery.isLoading || promotionQuery.isLoading,

    isFetching: bookingTypeQuery.isFetching || promotionQuery.isFetching,

    // ==================================================
    // ERROR
    // ==================================================

    isError: bookingTypeQuery.isError || promotionQuery.isError,

    errors: {
      bookingType: bookingTypeQuery.error as Error | null,

      promotion: promotionQuery.error as Error | null,
    },

    // ==================================================
    // REFETCH
    // ==================================================

    refetch: async () => {
      await Promise.all([bookingTypeQuery.refetch(), promotionQuery.refetch()]);
    },
  };
};
