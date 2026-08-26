"use client";

import { useQuery } from "@tanstack/react-query";

import { DistrictService } from "@/services/location/district/client";
import { CityService } from "@/services/location/city/client";
import { SearchTagService } from "@/services/search/tag/client";
import { BookingTypeService } from "@/services/commerce/booking-type/client";

export const useWardCreateFormData = (enabled = true) => {
  return useQuery({
    queryKey: ["ward-create-form-data"],
    enabled,
    staleTime: 1000 * 60 * 5,
    queryFn: async () => {
      const [districtData, cityData, bookingTypeData, searchTagData] =
        await Promise.all([
          DistrictService.getMany(),
          CityService.getMany(),
          BookingTypeService.getMany(),
          SearchTagService.getMany(),
        ]);

      return {
        districtData,
        cityData,
        bookingTypeData,
        searchTagData,
      };
    },
  });
};
