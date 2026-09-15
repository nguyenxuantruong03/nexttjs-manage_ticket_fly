"use client";

import { useBookingTypes } from "@/hooks/commerce/booking-type";

import { DEFAULT_LIMIT, DEFAULT_PAGE } from "@/config/react-query.config";

// ======================================================
// CREATE FORM DATA
// ======================================================

export const useTaxRuleCreateFormData = (enabled = true) => {
  const bookingTypeQuery = useBookingTypes(
    DEFAULT_PAGE,
    DEFAULT_LIMIT,
    enabled,
  );

  return {
    // ==================================================
    // DATA
    // ==================================================

    data: bookingTypeQuery.data
      ? {
          bookingTypeData: bookingTypeQuery.data,
        }
      : undefined,

    // ==================================================
    // LOADING
    // ==================================================

    isLoading: bookingTypeQuery.isLoading,

    isFetching: bookingTypeQuery.isFetching,

    // ==================================================
    // ERROR
    // ==================================================

    isError: bookingTypeQuery.isError,

    errors: {
      bookingType: bookingTypeQuery.error as Error | null,
    },

    // ==================================================
    // REFETCH
    // ==================================================

    refetch: bookingTypeQuery.refetch,
  };
};
