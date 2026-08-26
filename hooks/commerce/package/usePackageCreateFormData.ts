"use client";

import { BookingTypeService } from "@/services/commerce/booking-type/client";
import { CurrencyService } from "@/services/location/currency/client";

import { useQuery } from "@tanstack/react-query";

export const usePackageCreateFormData = (enabled = true) => {
  return useQuery({
    queryKey: ["package-create"],

    enabled,

    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const [bookingTypeData,currencyData] = await Promise.all([
        BookingTypeService.getMany(),
        CurrencyService.getMany()
      ]);

      return {
        bookingTypeData,
        currencyData
      };
    },
  });
};
