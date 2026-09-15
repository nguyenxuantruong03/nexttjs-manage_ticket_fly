"use client";

import { usePolicyType } from "@/hooks/features/policy-type";
import { useBookingTypes } from "@/hooks/commerce/booking-type";

import { DEFAULT_LIMIT, DEFAULT_PAGE } from "@/config/react-query.config";

// ======================================================
// UPDATE FORM DATA
// ======================================================

export const usePolicyTypeUpdateFormData = (
  policyTypeId: string,
  enabled = true,
) => {
  const policyTypeQuery = usePolicyType(policyTypeId, enabled);

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
      policyTypeQuery.data && bookingTypeQuery.data
        ? {
            policyTypeData: policyTypeQuery.data,

            bookingTypeData: bookingTypeQuery.data,
          }
        : undefined,

    // ==================================================
    // LOADING
    // ==================================================

    isLoading: policyTypeQuery.isLoading || bookingTypeQuery.isLoading,

    isFetching: policyTypeQuery.isFetching || bookingTypeQuery.isFetching,

    // ==================================================
    // ERROR
    // ==================================================

    isError: policyTypeQuery.isError || bookingTypeQuery.isError,

    errors: {
      policyType: policyTypeQuery.error as Error | null,

      bookingType: bookingTypeQuery.error as Error | null,
    },

    // ==================================================
    // REFETCH
    // ==================================================

    refetch: async () => {
      await Promise.all([
        policyTypeQuery.refetch(),
        bookingTypeQuery.refetch(),
      ]);
    },
  };
};
