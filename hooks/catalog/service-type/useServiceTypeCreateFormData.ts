"use client";

import { useBookingTypes } from "@/hooks/commerce/booking-type";

export const useServiceTypeCreateFormData = (enabled = true) => {
  const bookingTypeQuery = useBookingTypes(enabled);

  return {
    data: bookingTypeQuery.data
      ? { bookingTypes: bookingTypeQuery.data }
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
