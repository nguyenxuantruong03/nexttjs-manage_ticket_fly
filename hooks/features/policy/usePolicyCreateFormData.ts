"use client";

import { useBookingTypes } from "@/hooks/commerce/booking-type";
import { usePolicyTypes } from "@/hooks/features/policy-type";

import { DEFAULT_LIMIT, DEFAULT_PAGE } from "@/config/react-query.config";

// ======================================================
// CREATE FORM DATA
// ======================================================

export const usePolicyCreateFormData = (enabled = true) => {
  const bookingTypeQuery = useBookingTypes(
    DEFAULT_PAGE,
    DEFAULT_LIMIT,
    enabled,
  );

  const policyTypeQuery = usePolicyTypes(DEFAULT_PAGE, DEFAULT_LIMIT, enabled);

  return {
    // ==================================================
    // DATA
    // ==================================================

    data:
      bookingTypeQuery.data && policyTypeQuery.data
        ? {
            bookingTypeData: bookingTypeQuery.data,

            policyTypeData: policyTypeQuery.data,
          }
        : undefined,

    // ==================================================
    // LOADING
    // ==================================================

    isLoading: bookingTypeQuery.isLoading || policyTypeQuery.isLoading,

    isFetching: bookingTypeQuery.isFetching || policyTypeQuery.isFetching,

    // ==================================================
    // ERROR
    // ==================================================

    isError: bookingTypeQuery.isError || policyTypeQuery.isError,

    errors: {
      bookingType: bookingTypeQuery.error as Error | null,

      policyType: policyTypeQuery.error as Error | null,
    },

    // ==================================================
    // REFETCH
    // ==================================================

    refetch: async () => {
      await Promise.all([
        bookingTypeQuery.refetch(),
        policyTypeQuery.refetch(),
      ]);
    },
  };
};
