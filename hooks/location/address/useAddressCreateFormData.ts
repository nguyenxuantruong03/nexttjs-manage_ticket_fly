"use client";

import { useQuery } from "@tanstack/react-query";

import { CityService } from "@/services/location/city/client";
import { CountryService } from "@/services/location/country/client";
import { DistrictService } from "@/services/location/district/client";
import { WardService } from "@/services/location/ward/client";
import { TimezoneService } from "@/services/location/timezone/client";
import { LanguageService } from "@/services/location/language/client";
import { CurrencyService } from "@/services/location/currency/client";
import { SearchTagService } from "@/services/search/tag/client";
import { BookingTypeService } from "@/services/commerce/booking-type/client";
import { ContinentService } from "@/services/location/country/continent/client";

export const useAddressCreateFormData = (enabled = true) => {
  return useQuery({
    queryKey: ["address-create"],

    enabled,

    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const [
        cityData,
        districtData,
        wardData,
        countryData,
        timezoneData,
        languageData,
        currencyData,
        searchTagData,
        bookingTypeData,
        continentsData,
      ] = await Promise.all([
        CityService.getMany(),
        DistrictService.getMany(),
        WardService.getMany(),
        CountryService.getMany(),
        TimezoneService.getMany(),
        LanguageService.getMany(),
        CurrencyService.getMany(),
        SearchTagService.getMany(),
        BookingTypeService.getMany(),
        ContinentService.getMany(),
      ]);

      return {
        // Location
        cityData,
        districtData,
        wardData,
        countryData,

        // Master data
        timezoneData,
        languageData,
        currencyData,

        // Search
        searchTagData,
        bookingTypeData,
        continentsData,
      };
    },
  });
};
