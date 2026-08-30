"use client";

import { useBookingTypes } from "@/hooks/commerce/booking-type";
import { useCurrencies } from "@/hooks/location/currency";

export const usePackageCreateFormData = (enabled = true) => {
  const bookingTypeQuery = useBookingTypes(enabled);
  const currencyQuery = useCurrencies(enabled);

  return {
    data:
      bookingTypeQuery.data && currencyQuery.data
        ? {
            bookingTypeData: bookingTypeQuery.data,
            currencyData: currencyQuery.data,
          }
        : undefined,

    isLoading: bookingTypeQuery.isLoading || currencyQuery.isLoading,
    isFetching: bookingTypeQuery.isFetching || currencyQuery.isFetching,

    isError: bookingTypeQuery.isError || currencyQuery.isError,
    errors: {
      bookingType: bookingTypeQuery.error as Error | null,
      currency: currencyQuery.error as Error | null,
    },

    refetch: async () => {
      await Promise.all([bookingTypeQuery.refetch(), currencyQuery.refetch()]);
    },
  };
};
