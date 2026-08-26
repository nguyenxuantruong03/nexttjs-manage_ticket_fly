"use client";

import { BookingTypeService } from "@/services/commerce/booking-type/client";
import { FacilityCategoryService } from "@/services/features/facility-category/client";
import { FacilityService } from "@/services/features/facility/client";
import { useQuery } from "@tanstack/react-query";

export const useFacilityUpdateFormData = (
  facilityId: string,
  enabled = true,
) => {
  return useQuery({
    queryKey: ["facility-update", facilityId],

    enabled: enabled && !!facilityId,

    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const [facilityData, facilityCategoryData, bookingTypeData] =
        await Promise.all([
          FacilityService.getOne(facilityId),
          FacilityCategoryService.getMany(),
          BookingTypeService.getMany(),
        ]);

      return {
        facilityData,
        facilityCategoryData,
        bookingTypeData,
      };
    },
  });
};
