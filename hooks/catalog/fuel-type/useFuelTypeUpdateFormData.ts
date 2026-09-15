"use client";

import { useFuelType } from "@/hooks/catalog/fuel-type";

import { useBookingTypes } from "@/hooks/commerce/booking-type";

import { DEFAULT_LIMIT, DEFAULT_PAGE } from "@/config/react-query.config";

// ======================================================
// UPDATE FORM DATA
// ======================================================

export const useFuelTypeUpdateFormData = (
  fuelTypeId: string,
  enabled = true,
) => {
  const fuelTypeQuery = useFuelType(fuelTypeId, enabled);

  const bookingTypeQuery = useBookingTypes(
    DEFAULT_PAGE,
    DEFAULT_LIMIT,
    enabled,
  );

  return {
    // ==================================================
    // DATA
    // ==================================================

    data:
      fuelTypeQuery.data && bookingTypeQuery.data
        ? {
            fuelTypeData: fuelTypeQuery.data,
            bookingTypes: bookingTypeQuery.data,
          }
        : undefined,

    // ==================================================
    // LOADING
    // ==================================================

    isLoading: fuelTypeQuery.isLoading || bookingTypeQuery.isLoading,

    isFetching: fuelTypeQuery.isFetching || bookingTypeQuery.isFetching,

    // ==================================================
    // ERROR
    // ==================================================

    isError: fuelTypeQuery.isError || bookingTypeQuery.isError,

    errors: {
      fuelType: fuelTypeQuery.error as Error | null,

      bookingType: bookingTypeQuery.error as Error | null,
    },

    // ==================================================
    // REFETCH
    // ==================================================

    refetch: async () => {
      await Promise.all([fuelTypeQuery.refetch(), bookingTypeQuery.refetch()]);
    },
  };
};
