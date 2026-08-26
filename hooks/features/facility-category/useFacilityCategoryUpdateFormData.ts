"use client";

import { BookingTypeService } from "@/services/commerce/booking-type/client";
import { FacilityCategoryService } from "@/services/features/facility-category/client";
import { useQuery } from "@tanstack/react-query";

export const useFacilityCategoryUpdateFormData = (
  facilityCategoryId: string,
  enabled = true,
) => {
  return useQuery({
    queryKey: ["facility-category-update", facilityCategoryId],

    enabled: enabled && !!facilityCategoryId,

    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const [facilityCategoryData,bookingTypeData] = await Promise.all([
        FacilityCategoryService.getOne(facilityCategoryId),
        BookingTypeService.getMany(),
      ]);

      return {
        facilityCategoryData,bookingTypeData
      };
    },
  });
};
