"use client";

import { useBookingTypes } from "@/hooks/commerce/booking-type";

export const useBookingItemTypeCreateFormData = (enabled = true) => {
  const bookingTypeQuery = useBookingTypes(enabled);

  return {
    // Giữ tên field "bookingTypeData" (không phải "bookingTypes") vì
    // component BookingItemTypeForm đang đọc data.bookingTypeData.
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
