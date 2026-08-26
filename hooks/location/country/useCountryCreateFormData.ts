"use client";

import { useQuery } from "@tanstack/react-query";

import { CurrencyService } from "@/services/location/currency/client";
import { LanguageService } from "@/services/location/language/client";
import { TimezoneService } from "@/services/location/timezone/client";
import { SearchTagService } from "@/services/search/tag/client";
import { BookingTypeService } from "@/services/commerce/booking-type/client";
import { ContinentService } from "@/services/location/country/continent/client";

export const useCountryCreateFormData = (enabled = true) => {
  return useQuery({
    queryKey: ["country-create-form-data"],
    enabled,
    staleTime: 1000 * 60 * 5,
    queryFn: async () => {
      const [
        currencyData,
        searchTagData,
        timezoneData,
        languageData,
        bookingTypeData,
        continentData,
      ] = await Promise.all([
        CurrencyService.getMany(),
        SearchTagService.getMany(),
        TimezoneService.getMany(),
        LanguageService.getMany(),
        BookingTypeService.getMany(),
        ContinentService.getMany(),
      ]);

      return {
        currencyData,
        searchTagData,
        timezoneData,
        languageData,
        bookingTypeData,
        continentData,
      };
    },
  });
};
