"use client";

import { BookingTypeService } from "@/services/commerce/booking-type/client";

import { useQuery } from "@tanstack/react-query";

export const useBookingItemTypeCreateFormData = (enabled = true) => {
  return useQuery({
    queryKey: ["booking-item-type-create"],

    enabled,

    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const [bookingTypeData] = await Promise.all([
        BookingTypeService.getMany(),
      ]);

      return {
        bookingTypeData,
      };
    },
  });
};
