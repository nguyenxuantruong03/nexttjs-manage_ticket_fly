"use client";

import { useQuery } from "@tanstack/react-query";

import { CountryService } from "@/services/location/country/client";
import { CurrencyService } from "@/services/location/currency/client";
import { LanguageService } from "@/services/location/language/client";
import { TimezoneService } from "@/services/location/timezone/client";
import { SearchTagService } from "@/services/search/tag/client";
import { ContinentService } from "@/services/location/country/continent/client";
import { BookingTypeService } from "@/services/commerce/booking-type/client";

export const useCountryUpdateFormData = (countryId: string, enabled = true) => {
  return useQuery({
    queryKey: ["country-update-form-data", countryId],
    enabled: enabled && !!countryId,
    staleTime: 1000 * 60 * 5,
    queryFn: async () => {
      const [
        initialData,
        currencyData,
        searchTagData,
        timezoneData,
        languageData,
        bookingTypeData,
        continentData,
      ] = await Promise.all([
        CountryService.getOne(countryId),
        CurrencyService.getMany(),
        SearchTagService.getMany(),
        TimezoneService.getMany(),
        LanguageService.getMany(),
        BookingTypeService.getMany(),
        ContinentService.getMany(),
      ]);

      return {
        initialData,
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
