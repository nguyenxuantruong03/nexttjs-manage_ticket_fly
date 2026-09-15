"use client";

import { usePromotion } from "@/hooks/commerce/promotion";

import { useBookingTypes } from "@/hooks/commerce/booking-type";

import { DEFAULT_LIMIT, DEFAULT_PAGE } from "@/config/react-query.config";

// ======================================================
// UPDATE FORM DATA
// ======================================================

export const usePromotionUpdateFormData = (
  promotionId: string,
  enabled = true,
) => {
  const promotionQuery = usePromotion(promotionId, enabled);

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
      promotionQuery.data && bookingTypeQuery.data
        ? {
            promotionData: promotionQuery.data,

            bookingTypeData: bookingTypeQuery.data,
          }
        : undefined,

    // ==================================================
    // LOADING
    // ==================================================

    isLoading: promotionQuery.isLoading || bookingTypeQuery.isLoading,

    isFetching: promotionQuery.isFetching || bookingTypeQuery.isFetching,

    // ==================================================
    // ERROR
    // ==================================================

    isError: promotionQuery.isError || bookingTypeQuery.isError,

    errors: {
      promotion: promotionQuery.error as Error | null,

      bookingType: bookingTypeQuery.error as Error | null,
    },

    // ==================================================
    // REFETCH
    // ==================================================

    refetch: async () => {
      await Promise.all([promotionQuery.refetch(), bookingTypeQuery.refetch()]);
    },
  };
};
