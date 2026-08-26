"use client";

import { useQuery } from "@tanstack/react-query";

import { WardService } from "@/services/location/ward/client";
import { DistrictService } from "@/services/location/district/client";
import { CityService } from "@/services/location/city/client";
import { BookingTypeService } from "@/services/commerce/booking-type/client";
import { SearchTagService } from "@/services/search/tag/client";

export const useWardUpdateFormData = (wardId: string, enabled = true) => {
  return useQuery({
    queryKey: ["ward-update-form-data", wardId],
    enabled: enabled && !!wardId,
    staleTime: 1000 * 60 * 5,
    queryFn: async () => {
      const [
        initialData,
        districtData,
        cityData,
        bookingTypeData,
        searchTagData,
      ] = await Promise.all([
        WardService.getOne(wardId),
        DistrictService.getMany(),
        CityService.getMany(),
        BookingTypeService.getMany(),
        SearchTagService.getMany(),
      ]);

      return {
        initialData,
        districtData,
        cityData,
        bookingTypeData,
        searchTagData,
      };
    },
  });
};
