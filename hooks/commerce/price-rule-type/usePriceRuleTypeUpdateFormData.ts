"use client";

import { usePriceRuleType } from "@/hooks/commerce/price-rule-type";

import { useBookingTypes } from "@/hooks/commerce/booking-type";

import { DEFAULT_LIMIT, DEFAULT_PAGE } from "@/config/react-query.config";

// ======================================================
// UPDATE FORM DATA
// ======================================================

export const usePriceRuleTypeUpdateFormData = (
  priceRuleTypeId: string,
  enabled = true,
) => {
  const priceRuleTypeQuery = usePriceRuleType(priceRuleTypeId, enabled);

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
      priceRuleTypeQuery.data && bookingTypeQuery.data
        ? {
            priceRuleTypeData: priceRuleTypeQuery.data,

            bookingTypeData: bookingTypeQuery.data,
          }
        : undefined,

    // ==================================================
    // LOADING
    // ==================================================

    isLoading: priceRuleTypeQuery.isLoading || bookingTypeQuery.isLoading,

    isFetching: priceRuleTypeQuery.isFetching || bookingTypeQuery.isFetching,

    // ==================================================
    // ERROR
    // ==================================================

    isError: priceRuleTypeQuery.isError || bookingTypeQuery.isError,

    errors: {
      priceRuleType: priceRuleTypeQuery.error as Error | null,

      bookingType: bookingTypeQuery.error as Error | null,
    },

    // ==================================================
    // REFETCH
    // ==================================================

    refetch: async () => {
      await Promise.all([
        priceRuleTypeQuery.refetch(),
        bookingTypeQuery.refetch(),
      ]);
    },
  };
};
