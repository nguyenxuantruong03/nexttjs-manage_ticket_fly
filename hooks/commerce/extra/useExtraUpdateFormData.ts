"use client";

import { BookingTypeService } from "@/services/commerce/booking-type/client";
import { ExtraTypeService } from "@/services/commerce/extra-type/client";
import { ExtraService } from "@/services/commerce/extra/client";
import { CurrencyService } from "@/services/location/currency/client";
import { useQuery } from "@tanstack/react-query";

export const useExtraUpdateFormData = (extraId: string, enabled = true) => {
  return useQuery({
    queryKey: ["extra-update", extraId],

    enabled: enabled && !!extraId,

    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const [extraData, bookingTypeData, extraTypeData, currencyData] =
        await Promise.all([
          ExtraService.getOne(extraId),
          BookingTypeService.getMany(),
          ExtraTypeService.getMany(),
          CurrencyService.getMany(),
        ]);

      return {
        extraData,
        bookingTypeData,
        extraTypeData,
        currencyData,
      };
    },
  });
};
