"use client";

import { useQuery } from "@tanstack/react-query";

import { CityService } from "@/services/location/city/client";
import { CountryService } from "@/services/location/country/client";
import { BookingTypeService } from "@/services/commerce/booking-type/client";
import { SearchTagService } from "@/services/search/tag/client";
import { TimezoneService } from "@/services/location/timezone/client";

export const useDistrictCreateFormData = (enabled = true) => {
  return useQuery({
    queryKey: ["district-create-form-data"],
    enabled,
    staleTime: 1000 * 60 * 5,
    queryFn: async () => {
      const [cityData, countryData, bookingTypeData, searchTagData,timezones] =
        await Promise.all([
          CityService.getMany(),
          CountryService.getMany(),
          BookingTypeService.getMany(),
          SearchTagService.getMany(),
          TimezoneService.getMany()
        ]);

      return {
        cityData,
        countryData,
        bookingTypeData,
        searchTagData,
        timezones
      };
    },
  });
};
