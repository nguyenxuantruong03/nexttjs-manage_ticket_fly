"use client";

import { useExtraType } from "@/hooks/commerce/extra-type";

import { useBookingTypes } from "@/hooks/commerce/booking-type";

import { DEFAULT_LIMIT, DEFAULT_PAGE } from "@/config/react-query.config";

// ======================================================
// UPDATE FORM DATA
// ======================================================

export const useExtraTypeUpdateFormData = (
  extraTypeId: string,
  enabled = true,
) => {
  const extraTypeQuery = useExtraType(extraTypeId, enabled);

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
      extraTypeQuery.data && bookingTypeQuery.data
        ? {
            extraTypeData: extraTypeQuery.data,

            bookingTypeData: bookingTypeQuery.data,
          }
        : undefined,

    // ==================================================
    // LOADING
    // ==================================================

    isLoading: extraTypeQuery.isLoading || bookingTypeQuery.isLoading,

    isFetching: extraTypeQuery.isFetching || bookingTypeQuery.isFetching,

    // ==================================================
    // ERROR
    // ==================================================

    isError: extraTypeQuery.isError || bookingTypeQuery.isError,

    errors: {
      extraType: extraTypeQuery.error as Error | null,

      bookingType: bookingTypeQuery.error as Error | null,
    },

    // ==================================================
    // REFETCH
    // ==================================================

    refetch: async () => {
      await Promise.all([extraTypeQuery.refetch(), bookingTypeQuery.refetch()]);
    },
  };
};
