"use client";

import { BookingTypeService } from "@/services/commerce/booking-type/client";
import { ExtraTypeService } from "@/services/commerce/extra-type/client";
import { useQuery } from "@tanstack/react-query";

export const useExtraTypeUpdateFormData = (
  extraTypeId: string,
  enabled = true,
) => {
  return useQuery({
    queryKey: ["extra-type-update", extraTypeId],

    enabled: enabled && !!extraTypeId,

    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const [extraTypeData, bookingTypeData] = await Promise.all([
        ExtraTypeService.getOne(extraTypeId),
        BookingTypeService.getMany(),
      ]);

      return {
        extraTypeData,
        bookingTypeData,
      };
    },
  });
};
