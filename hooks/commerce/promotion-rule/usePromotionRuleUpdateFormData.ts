"use client";

import { usePromotionRule } from "@/hooks/commerce/promotion-rule";
import { usePromotions } from "@/hooks/commerce/promotion";
import { useBookingTypes } from "@/hooks/commerce/booking-type";

export const usePromotionRuleUpdateFormData = (
  promotionRuleId: string,
  enabled = true,
) => {
  const promotionRuleQuery = usePromotionRule(promotionRuleId, enabled);
  const promotionQuery = usePromotions(enabled);
  const bookingTypeQuery = useBookingTypes(enabled);

  return {
    data:
      promotionRuleQuery.data && promotionQuery.data && bookingTypeQuery.data
        ? {
            promotionRuleData: promotionRuleQuery.data,
            promotionData: promotionQuery.data,
            bookingTypeData: bookingTypeQuery.data,
          }
        : undefined,
    isLoading:
      promotionRuleQuery.isLoading ||
      promotionQuery.isLoading ||
      bookingTypeQuery.isLoading,
    isFetching:
      promotionRuleQuery.isFetching ||
      promotionQuery.isFetching ||
      bookingTypeQuery.isFetching,
    isError:
      promotionRuleQuery.isError ||
      promotionQuery.isError ||
      bookingTypeQuery.isError,
    errors: {
      promotionRule: promotionRuleQuery.error as Error | null,
      promotion: promotionQuery.error as Error | null,
      bookingType: bookingTypeQuery.error as Error | null,
    },
    refetch: async () => {
      await Promise.all([
        promotionRuleQuery.refetch(),
        promotionQuery.refetch(),
        bookingTypeQuery.refetch(),
      ]);
    },
  };
};
