"use client";

import { useTaxRule } from ".";
import { useBookingTypes } from "@/hooks/commerce/booking-type";

export const useTaxRuleUpdateFormData = (
  taxRuleId: string,
  enabled = true,
) => {
  const taxRuleQuery = useTaxRule(taxRuleId, enabled);

  const bookingTypeQuery = useBookingTypes(enabled);

  return {
    data:
      taxRuleQuery.data && bookingTypeQuery.data
        ? {
            taxRuleData: taxRuleQuery.data,
            bookingTypeData: bookingTypeQuery.data,
          }
        : undefined,

    isLoading:
      taxRuleQuery.isLoading || bookingTypeQuery.isLoading,

    isFetching:
      taxRuleQuery.isFetching || bookingTypeQuery.isFetching,

    isError:
      taxRuleQuery.isError || bookingTypeQuery.isError,

    errors: {
      taxRule: taxRuleQuery.error as Error | null,
      bookingType: bookingTypeQuery.error as Error | null,
    },

    refetch: async () => {
      await Promise.all([
        taxRuleQuery.refetch(),
        bookingTypeQuery.refetch(),
      ]);
    },
  };
};