"use client";

import { useQuery } from "@tanstack/react-query";

import { BookingTypeService } from "@/services/commerce/booking-type/client";

export const useSearchTagCreateFormData = (enabled = true) => {
  return useQuery({
    queryKey: ["search-tag-create-form-data"],

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