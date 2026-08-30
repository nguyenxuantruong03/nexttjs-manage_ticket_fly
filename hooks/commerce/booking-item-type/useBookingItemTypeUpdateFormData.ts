"use client";

import { useBookingItemType } from "@/hooks/commerce/booking-item-type";
import { useBookingTypes } from "@/hooks/commerce/booking-type";

export const useBookingItemTypeUpdateFormData = (
  bookingItemTypeId: string,
  enabled = true,
) => {
  const bookingItemTypeQuery = useBookingItemType(bookingItemTypeId, enabled);
  const bookingTypeQuery = useBookingTypes(enabled);

  return {
    data:
      bookingItemTypeQuery.data && bookingTypeQuery.data
        ? {
            bookingItemTypeData: bookingItemTypeQuery.data,
            bookingTypeData: bookingTypeQuery.data,
          }
        : undefined,

    isLoading: bookingItemTypeQuery.isLoading || bookingTypeQuery.isLoading,
    isFetching: bookingItemTypeQuery.isFetching || bookingTypeQuery.isFetching,

    isError: bookingItemTypeQuery.isError || bookingTypeQuery.isError,
    errors: {
      bookingItemType: bookingItemTypeQuery.error as Error | null,
      bookingType: bookingTypeQuery.error as Error | null,
    },

    refetch: async () => {
      await Promise.all([
        bookingItemTypeQuery.refetch(),
        bookingTypeQuery.refetch(),
      ]);
    },
  };
};
