"use client";

import { BookingTypeService } from "@/services/commerce/booking-type/client";

import { useQuery } from "@tanstack/react-query";

export const useServiceTypeCreateFormData = (enabled = true) => {
  return useQuery({
    queryKey: ["service-type-create"],

    enabled,

    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const [bookingTypes] = await Promise.all([
        BookingTypeService.getMany(),
      ]);

      return {
        bookingTypes,
      };
    },
  });
};