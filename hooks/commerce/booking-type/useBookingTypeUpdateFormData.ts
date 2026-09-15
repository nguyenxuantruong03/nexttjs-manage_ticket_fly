"use client";

import { useBookingType } from "@/hooks/commerce/booking-type";

// ======================================================
// UPDATE FORM DATA
// ======================================================

export const useBookingTypeUpdateFormData = (
  bookingTypeId: string,
  enabled = true,
) => {
  const bookingTypeQuery = useBookingType(bookingTypeId, enabled);

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
