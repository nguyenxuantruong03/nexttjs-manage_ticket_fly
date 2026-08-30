"use client";

import { usePriceRuleType } from "@/hooks/commerce/price-rule-type";
import { useBookingTypes } from "@/hooks/commerce/booking-type";

export const usePriceRuleTypeUpdateFormData = (
  priceRuleTypeId: string,
  enabled = true,
) => {
  const priceRuleTypeQuery = usePriceRuleType(priceRuleTypeId, enabled);
  const bookingTypeQuery = useBookingTypes(enabled);

  return {
    data:
      priceRuleTypeQuery.data && bookingTypeQuery.data
        ? {
            priceRuleTypeData: priceRuleTypeQuery.data,
            bookingTypeData: bookingTypeQuery.data,
          }
        : undefined,

    isLoading: priceRuleTypeQuery.isLoading || bookingTypeQuery.isLoading,
    isFetching: priceRuleTypeQuery.isFetching || bookingTypeQuery.isFetching,

    isError: priceRuleTypeQuery.isError || bookingTypeQuery.isError,
    errors: {
      priceRuleType: priceRuleTypeQuery.error as Error | null,
      bookingType: bookingTypeQuery.error as Error | null,
    },

    refetch: async () => {
      await Promise.all([
        priceRuleTypeQuery.refetch(),
        bookingTypeQuery.refetch(),
      ]);
    },
  };
};
