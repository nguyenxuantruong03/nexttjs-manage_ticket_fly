"use client";

import { useVehicleType } from "@/hooks/catalog/vehicle-type";
import { useBookingTypes } from "@/hooks/commerce/booking-type";

export const useVehicleTypeUpdateFormData = (
  vehicleTypeId: string,
  enabled = true,
) => {
  const vehicleTypeQuery = useVehicleType(vehicleTypeId, enabled);
  const bookingTypeQuery = useBookingTypes(enabled);

  return {
    data:
      vehicleTypeQuery.data && bookingTypeQuery.data
        ? {
            vehicleTypeData: vehicleTypeQuery.data,
            bookingTypes: bookingTypeQuery.data,
          }
        : undefined,

    isLoading: vehicleTypeQuery.isLoading || bookingTypeQuery.isLoading,
    isFetching: vehicleTypeQuery.isFetching || bookingTypeQuery.isFetching,

    isError: vehicleTypeQuery.isError || bookingTypeQuery.isError,
    errors: {
      vehicleType: vehicleTypeQuery.error as Error | null,
      bookingType: bookingTypeQuery.error as Error | null,
    },

    refetch: async () => {
      await Promise.all([
        vehicleTypeQuery.refetch(),
        bookingTypeQuery.refetch(),
      ]);
    },
  };
};
