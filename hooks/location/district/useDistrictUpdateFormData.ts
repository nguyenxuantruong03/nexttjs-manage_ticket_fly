"use client";

import { useQuery } from "@tanstack/react-query";

import { DistrictService } from "@/services/location/district/client";
import { CityService } from "@/services/location/city/client";
import { CountryService } from "@/services/location/country/client";
import { BookingTypeService } from "@/services/commerce/booking-type/client";
import { SearchTagService } from "@/services/search/tag/client";
import { TimezoneService } from "@/services/location/timezone/client";

export const useDistrictUpdateFormData = (
  districtId: string,
  enabled = true,
) => {
  return useQuery({
    queryKey: ["district-update-form-data", districtId],
    enabled: enabled && !!districtId,
    staleTime: 1000 * 60 * 5,
    queryFn: async () => {
      const [
        initialData,
        cityData,
        countryData,
        bookingTypeData,
        searchTagData,
        timezones,
      ] = await Promise.all([
        DistrictService.getOne(districtId),
        CityService.getMany(),
        CountryService.getMany(),
        BookingTypeService.getMany(),
        SearchTagService.getMany(),
        TimezoneService.getMany(),
      ]);

      return {
        initialData,
        cityData,
        countryData,
        bookingTypeData,
        searchTagData,
        timezones,
      };
    },
  });
};
