"use client";

import { BookingTypeService } from "@/services/commerce/booking-type/client";
import { BookingItemTypeService } from "@/services/commerce/booking-item-type/client";

import { useQuery } from "@tanstack/react-query";

export const useBookingItemTypeUpdateFormData = (
  bookingItemTypeId: string,
  enabled = true,
) => {
  return useQuery({
    queryKey: ["booking-item-type-update", bookingItemTypeId],

    enabled: enabled && !!bookingItemTypeId,

    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const [bookingItemTypeData, bookingTypeData] = await Promise.all([
        BookingItemTypeService.getOne(bookingItemTypeId),
        BookingTypeService.getMany(),
      ]);

      return {
        bookingItemTypeData,
        bookingTypeData,
      };
    },
  });
};