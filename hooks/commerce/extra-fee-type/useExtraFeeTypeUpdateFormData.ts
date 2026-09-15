"use client";

import { useExtraFeeType } from "@/hooks/commerce/extra-fee-type";

import { useBookingTypes } from "@/hooks/commerce/booking-type";

import { DEFAULT_LIMIT, DEFAULT_PAGE } from "@/config/react-query.config";

// ======================================================
// UPDATE FORM DATA
// ======================================================

export const useExtraFeeTypeUpdateFormData = (
  extraFeeTypeId: string,
  enabled = true,
) => {
  const extraFeeTypeQuery = useExtraFeeType(extraFeeTypeId, enabled);

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
      extraFeeTypeQuery.data && bookingTypeQuery.data
        ? {
            extraFeeTypeData: extraFeeTypeQuery.data,

            bookingTypes: bookingTypeQuery.data,
          }
        : undefined,

    // ==================================================
    // LOADING
    // ==================================================

    isLoading: extraFeeTypeQuery.isLoading || bookingTypeQuery.isLoading,

    isFetching: extraFeeTypeQuery.isFetching || bookingTypeQuery.isFetching,

    // ==================================================
    // ERROR
    // ==================================================

    isError: extraFeeTypeQuery.isError || bookingTypeQuery.isError,

    errors: {
      extraFeeType: extraFeeTypeQuery.error as Error | null,

      bookingType: bookingTypeQuery.error as Error | null,
    },

    // ==================================================
    // REFETCH
    // ==================================================

    refetch: async () => {
      await Promise.all([
        extraFeeTypeQuery.refetch(),
        bookingTypeQuery.refetch(),
      ]);
    },
  };
};
