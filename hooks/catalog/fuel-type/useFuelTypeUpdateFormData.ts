"use client";

import { useFuelType } from "@/hooks/catalog/fuel-type";
import { useBookingTypes } from "@/hooks/commerce/booking-type";

export const useFuelTypeUpdateFormData = (
  fuelTypeId: string,
  enabled = true,
) => {
  const fuelTypeQuery = useFuelType(fuelTypeId, enabled);
  const bookingTypeQuery = useBookingTypes(enabled);

  return {
    data:
      fuelTypeQuery.data && bookingTypeQuery.data
        ? {
            fuelTypeData: fuelTypeQuery.data,
            bookingTypes: bookingTypeQuery.data,
          }
        : undefined,

    isLoading: fuelTypeQuery.isLoading || bookingTypeQuery.isLoading,
    isFetching: fuelTypeQuery.isFetching || bookingTypeQuery.isFetching,

    isError: fuelTypeQuery.isError || bookingTypeQuery.isError,
    errors: {
      fuelType: fuelTypeQuery.error as Error | null,
      bookingType: bookingTypeQuery.error as Error | null,
    },

    refetch: async () => {
      await Promise.all([fuelTypeQuery.refetch(), bookingTypeQuery.refetch()]);
    },
  };
};
