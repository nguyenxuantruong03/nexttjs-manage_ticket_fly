"use client";

import { BookingTypeService } from "@/services/commerce/booking-type/client";
import { useQuery } from "@tanstack/react-query";

export const useBookingTypeUpdateFormData = (
  bookingTypeId: string,
  enabled = true,
) => {
  return useQuery({
    queryKey: ["booking-type-update", bookingTypeId],

    enabled: enabled && !!bookingTypeId,

    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const [bookingTypeData] = await Promise.all([
        BookingTypeService.getOne(bookingTypeId),
      ]);

      return {
        bookingTypeData,
      };
    },
  });
};
