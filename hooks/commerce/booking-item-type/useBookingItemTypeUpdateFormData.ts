"use client";

import { useBookingItemType } from "@/hooks/commerce/booking-item-type";

import { useBookingTypes } from "@/hooks/commerce/booking-type";

import { DEFAULT_LIMIT, DEFAULT_PAGE } from "@/config/react-query.config";

// ======================================================
// UPDATE FORM DATA
// ======================================================

export const useBookingItemTypeUpdateFormData = (
  bookingItemTypeId: string,
  enabled = true,
) => {
  const bookingItemTypeQuery = useBookingItemType(bookingItemTypeId, enabled);

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
      bookingItemTypeQuery.data && bookingTypeQuery.data
        ? {
            bookingItemTypeData: bookingItemTypeQuery.data,
            bookingTypeData: bookingTypeQuery.data,
          }
        : undefined,

    // ==================================================
    // LOADING
    // ==================================================

    isLoading: bookingItemTypeQuery.isLoading || bookingTypeQuery.isLoading,

    isFetching: bookingItemTypeQuery.isFetching || bookingTypeQuery.isFetching,

    // ==================================================
    // ERROR
    // ==================================================

    isError: bookingItemTypeQuery.isError || bookingTypeQuery.isError,

    errors: {
      bookingItemType: bookingItemTypeQuery.error as Error | null,

      bookingType: bookingTypeQuery.error as Error | null,
    },

    // ==================================================
    // REFETCH
    // ==================================================

    refetch: async () => {
      await Promise.all([
        bookingItemTypeQuery.refetch(),
        bookingTypeQuery.refetch(),
      ]);
    },
  };
};
