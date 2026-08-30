"use client";

import { usePromotion } from "@/hooks/commerce/promotion";
import { useBookingTypes } from "@/hooks/commerce/booking-type";

export const usePromotionUpdateFormData = (
  promotionId: string,
  enabled = true,
) => {
  const promotionQuery = usePromotion(promotionId, enabled);
  const bookingTypeQuery = useBookingTypes(enabled);

  return {
    data:
      promotionQuery.data && bookingTypeQuery.data
        ? {
            promotionData: promotionQuery.data,
            bookingTypeData: bookingTypeQuery.data,
          }
        : undefined,
    isLoading: promotionQuery.isLoading || bookingTypeQuery.isLoading,
    isFetching: promotionQuery.isFetching || bookingTypeQuery.isFetching,
    isError: promotionQuery.isError || bookingTypeQuery.isError,
    errors: {
      promotion: promotionQuery.error as Error | null,
      bookingType: bookingTypeQuery.error as Error | null,
    },
    refetch: async () => {
      await Promise.all([promotionQuery.refetch(), bookingTypeQuery.refetch()]);
    },
  };
};
