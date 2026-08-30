"use client";

import { usePackage } from "@/hooks/commerce/package";
import { useBookingTypes } from "@/hooks/commerce/booking-type";
import { useCurrencies } from "@/hooks/location/currency";

export const usePackageUpdateFormData = (packageId: string, enabled = true) => {
  const packageQuery = usePackage(packageId, enabled);
  const bookingTypeQuery = useBookingTypes(enabled);
  const currencyQuery = useCurrencies(enabled);

  return {
    data:
      packageQuery.data && bookingTypeQuery.data && currencyQuery.data
        ? {
            packageData: packageQuery.data,
            bookingTypeData: bookingTypeQuery.data,
            currencyData: currencyQuery.data,
          }
        : undefined,

    isLoading:
      packageQuery.isLoading ||
      bookingTypeQuery.isLoading ||
      currencyQuery.isLoading,
    isFetching:
      packageQuery.isFetching ||
      bookingTypeQuery.isFetching ||
      currencyQuery.isFetching,

    isError:
      packageQuery.isError || bookingTypeQuery.isError || currencyQuery.isError,
    errors: {
      package: packageQuery.error as Error | null,
      bookingType: bookingTypeQuery.error as Error | null,
      currency: currencyQuery.error as Error | null,
    },

    refetch: async () => {
      await Promise.all([
        packageQuery.refetch(),
        bookingTypeQuery.refetch(),
        currencyQuery.refetch(),
      ]);
    },
  };
};
