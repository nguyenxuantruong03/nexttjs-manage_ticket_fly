"use client";

import { BookingTypeService } from "@/services/commerce/booking-type/client";
import { FacilityCategoryService } from "@/services/features/facility-category/client";
import { useQuery } from "@tanstack/react-query";

export const useFacilityCategoryCreateFormData = (enabled = true) => {
  return useQuery({
    queryKey: ["facility-category-create"],
    enabled,
    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const [bookingTypeData] = await Promise.all([
         BookingTypeService.getMany(),
      ]);

      return {bookingTypeData};
    },
  });
};
