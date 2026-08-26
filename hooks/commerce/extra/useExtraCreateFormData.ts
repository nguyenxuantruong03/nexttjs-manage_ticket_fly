"use client";

import { BookingTypeService } from "@/services/commerce/booking-type/client";
import { ExtraTypeService } from "@/services/commerce/extra-type/client";
import { CurrencyService } from "@/services/location/currency/client";

import { useQuery } from "@tanstack/react-query";

export const useExtraCreateFormData = (enabled = true) => {
  return useQuery({
    queryKey: ["extra-create"],

    enabled,

    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const [bookingTypeData, extraTypeData, currencyData] = await Promise.all([
        BookingTypeService.getMany(),
        ExtraTypeService.getMany(),
        CurrencyService.getMany(),
      ]);

      return { bookingTypeData, extraTypeData, currencyData };
    },
  });
};
