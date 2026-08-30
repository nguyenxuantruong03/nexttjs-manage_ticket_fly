"use client";

import { useExtraType } from "@/hooks/commerce/extra-type";
import { useBookingTypes } from "@/hooks/commerce/booking-type";

export const useExtraTypeUpdateFormData = (
  extraTypeId: string,
  enabled = true,
) => {
  const extraTypeQuery = useExtraType(extraTypeId, enabled);
  const bookingTypeQuery = useBookingTypes(enabled);

  return {
    data:
      extraTypeQuery.data && bookingTypeQuery.data
        ? {
            extraTypeData: extraTypeQuery.data,
            bookingTypeData: bookingTypeQuery.data,
          }
        : undefined,

    isLoading: extraTypeQuery.isLoading || bookingTypeQuery.isLoading,
    isFetching: extraTypeQuery.isFetching || bookingTypeQuery.isFetching,

    isError: extraTypeQuery.isError || bookingTypeQuery.isError,
    errors: {
      extraType: extraTypeQuery.error as Error | null,
      bookingType: bookingTypeQuery.error as Error | null,
    },

    refetch: async () => {
      await Promise.all([
        extraTypeQuery.refetch(),
        bookingTypeQuery.refetch(),
      ]);
    },
  };
};