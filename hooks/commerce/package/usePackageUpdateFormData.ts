"use client";

import { BookingTypeService } from "@/services/commerce/booking-type/client";

import { PackageService } from "@/services/commerce/package/client";
import { CurrencyService } from "@/services/location/currency/client";

import { useQuery } from "@tanstack/react-query";

export const usePackageUpdateFormData = (packageId: string, enabled = true) => {
  return useQuery({
    queryKey: ["package-update", packageId],

    enabled: enabled && !!packageId,

    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const [packageData, bookingTypeData, currencyData] = await Promise.all([
        PackageService.getOne(packageId),
        BookingTypeService.getMany(),
        CurrencyService.getMany(),
      ]);

      return {
        packageData,
        bookingTypeData,
        currencyData,
      };
    },
  });
};
