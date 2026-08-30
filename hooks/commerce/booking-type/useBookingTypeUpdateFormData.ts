"use client";

import { useBookingType } from "@/hooks/commerce/booking-type";

export const useBookingTypeUpdateFormData = (
  bookingTypeId: string,
  enabled = true,
) => {
  const bookingTypeQuery = useBookingType(bookingTypeId, enabled);

  return {
    data: bookingTypeQuery.data
      ? { bookingTypeData: bookingTypeQuery.data }
      : undefined,

    isLoading: bookingTypeQuery.isLoading,
    isFetching: bookingTypeQuery.isFetching,

    isError: bookingTypeQuery.isError,
    errors: {
      bookingType: bookingTypeQuery.error as Error | null,
    },

    refetch: bookingTypeQuery.refetch,
  };
};
