"use client";

import { FuelTypeService } from "@/services/catalog/fuel-type/client";
import { BookingTypeService } from "@/services/commerce/booking-type/client";
import { useQuery } from "@tanstack/react-query";

export const useFuelTypeUpdateFormData = (
  fuelTypeId: string,
  enabled = true,
) => {
  return useQuery({
    queryKey: ["fuel-type-update", fuelTypeId],

    enabled: enabled && !!fuelTypeId,

    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const [fuelTypeData, bookingTypes] = await Promise.all([
        FuelTypeService.getOne(fuelTypeId),
        BookingTypeService.getMany(),
      ]);

      return {
        fuelTypeData,
        bookingTypes,
      };
    },
  });
};