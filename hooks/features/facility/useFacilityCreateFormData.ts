"use client";

import { BookingTypeService } from "@/services/commerce/booking-type/client";
import { FacilityCategoryService } from "@/services/features/facility-category/client";
import { FacilityService } from "@/services/features/facility/client";
import { useQuery } from "@tanstack/react-query";

export const useFacilityCreateFormData = (enabled = true) => {
  return useQuery({
    queryKey: ["facility-create"],
    enabled,
    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const [bookingTypeData, facilityCategoryData] = await Promise.all([
        BookingTypeService.getMany(),
        FacilityCategoryService.getMany(),
      ]);

      return {
        bookingTypeData,
        facilityCategoryData,
      };
    },
  });
};
