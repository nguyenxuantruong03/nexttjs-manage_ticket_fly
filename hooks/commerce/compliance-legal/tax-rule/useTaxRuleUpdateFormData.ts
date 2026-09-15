"use client";

import { useTaxRule } from "@/hooks/commerce/compliance-legal/tax-rule";

import { useBookingTypes } from "@/hooks/commerce/booking-type";

import { DEFAULT_LIMIT, DEFAULT_PAGE } from "@/config/react-query.config";

// ======================================================
// UPDATE FORM DATA
// ======================================================

export const useTaxRuleUpdateFormData = (taxRuleId: string, enabled = true) => {
  const taxRuleQuery = useTaxRule(taxRuleId, enabled);

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
      taxRuleQuery.data && bookingTypeQuery.data
        ? {
            taxRuleData: taxRuleQuery.data,
            bookingTypeData: bookingTypeQuery.data,
          }
        : undefined,

    // ==================================================
    // LOADING
    // ==================================================

    isLoading: taxRuleQuery.isLoading || bookingTypeQuery.isLoading,

    isFetching: taxRuleQuery.isFetching || bookingTypeQuery.isFetching,

    // ==================================================
    // ERROR
    // ==================================================

    isError: taxRuleQuery.isError || bookingTypeQuery.isError,

    errors: {
      taxRule: taxRuleQuery.error as Error | null,

      bookingType: bookingTypeQuery.error as Error | null,
    },

    // ==================================================
    // REFETCH
    // ==================================================

    refetch: async () => {
      await Promise.all([taxRuleQuery.refetch(), bookingTypeQuery.refetch()]);
    },
  };
};
