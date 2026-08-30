"use client";

import { useBookingTypes } from "@/hooks/commerce/booking-type";
import { useExtraTypes } from "@/hooks/commerce/extra-type";
import { useCurrencies } from "@/hooks/location/currency";

export const useExtraCreateFormData = (enabled = true) => {
  const bookingTypeQuery = useBookingTypes(enabled);
  const extraTypeQuery = useExtraTypes(enabled);
  const currencyQuery = useCurrencies(enabled);

  return {
    data:
      bookingTypeQuery.data && extraTypeQuery.data && currencyQuery.data
        ? {
            bookingTypeData: bookingTypeQuery.data,
            extraTypeData: extraTypeQuery.data,
            currencyData: currencyQuery.data,
          }
        : undefined,

    isLoading:
      bookingTypeQuery.isLoading ||
      extraTypeQuery.isLoading ||
      currencyQuery.isLoading,

    isFetching:
      bookingTypeQuery.isFetching ||
      extraTypeQuery.isFetching ||
      currencyQuery.isFetching,

    isError:
      bookingTypeQuery.isError ||
      extraTypeQuery.isError ||
      currencyQuery.isError,

    errors: {
      bookingType: bookingTypeQuery.error as Error | null,
      extraType: extraTypeQuery.error as Error | null,
      currency: currencyQuery.error as Error | null,
    },

    refetch: async () => {
      await Promise.all([
        bookingTypeQuery.refetch(),
        extraTypeQuery.refetch(),
        currencyQuery.refetch(),
      ]);
    },
  };
};