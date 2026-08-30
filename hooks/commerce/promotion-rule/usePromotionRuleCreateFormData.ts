"use client";

import { useBookingTypes } from "@/hooks/commerce/booking-type";
import { usePromotions } from "@/hooks/commerce/promotion";

export const usePromotionRuleCreateFormData = (enabled = true) => {
  const bookingTypeQuery = useBookingTypes(enabled);
  const promotionQuery = usePromotions(enabled);

  return {
    data:
      bookingTypeQuery.data && promotionQuery.data
        ? {
            bookingTypeData: bookingTypeQuery.data,
            promotionData: promotionQuery.data,
          }
        : undefined,
    isLoading: bookingTypeQuery.isLoading || promotionQuery.isLoading,
    isFetching: bookingTypeQuery.isFetching || promotionQuery.isFetching,
    isError: bookingTypeQuery.isError || promotionQuery.isError,
    errors: {
      bookingType: bookingTypeQuery.error as Error | null,
      promotion: promotionQuery.error as Error | null,
    },
    refetch: async () => {
      await Promise.all([bookingTypeQuery.refetch(), promotionQuery.refetch()]);
    },
  };
};
