"use client";

import { useVehicleType } from "@/hooks/catalog/vehicle-type";

import { useBookingTypes } from "@/hooks/commerce/booking-type";

import { DEFAULT_LIMIT, DEFAULT_PAGE } from "@/config/react-query.config";

// ======================================================
// UPDATE FORM DATA
// ======================================================

export const useVehicleTypeUpdateFormData = (
  vehicleTypeId: string,
  enabled = true,
) => {
  const vehicleTypeQuery = useVehicleType(vehicleTypeId, enabled);

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
      vehicleTypeQuery.data && bookingTypeQuery.data
        ? {
            vehicleTypeData: vehicleTypeQuery.data,
            bookingTypes: bookingTypeQuery.data,
          }
        : undefined,

    // ==================================================
    // LOADING
    // ==================================================

    isLoading: vehicleTypeQuery.isLoading || bookingTypeQuery.isLoading,

    isFetching: vehicleTypeQuery.isFetching || bookingTypeQuery.isFetching,

    // ==================================================
    // ERROR
    // ==================================================

    isError: vehicleTypeQuery.isError || bookingTypeQuery.isError,

    errors: {
      vehicleType: vehicleTypeQuery.error as Error | null,

      bookingType: bookingTypeQuery.error as Error | null,
    },

    // ==================================================
    // REFETCH
    // ==================================================

    refetch: async () => {
      await Promise.all([
        vehicleTypeQuery.refetch(),
        bookingTypeQuery.refetch(),
      ]);
    },
  };
};
