"use client";

import { BookingTypeService } from "@/services/commerce/booking-type/client";
import { useQuery } from "@tanstack/react-query";

export const useBookingTypeCreateFormData = (enabled = true) => {
  return useQuery({
    queryKey: ["booking-type-create"],
    enabled,
    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const [] = await Promise.all([]);

      return {};
    },
  });
};
