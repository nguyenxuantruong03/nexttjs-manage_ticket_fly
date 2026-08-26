"use client";

import { VehicleTypeService } from "@/services/catalog/vehicle-type/client";
import { BookingTypeService } from "@/services/commerce/booking-type/client";
import { useQuery } from "@tanstack/react-query";

export const useVehicleTypeUpdateFormData = (
  vehicleTypeId: string,
  enabled = true,
) => {
  return useQuery({
    queryKey: ["vehicle-type-update", vehicleTypeId],

    enabled: enabled && !!vehicleTypeId,

    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const [vehicleTypeData, bookingTypes] = await Promise.all([
        VehicleTypeService.getOne(vehicleTypeId),
        BookingTypeService.getMany(),
      ]);

      return {
        vehicleTypeData,
        bookingTypes,
      };
    },
  });
};
