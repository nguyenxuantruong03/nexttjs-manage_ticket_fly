"use client";

import { useQuery } from "@tanstack/react-query";

import { CountryService } from "@/services/location/country/client";
import { SearchTagService } from "@/services/search/tag/client";
import { TimezoneService } from "@/services/location/timezone/client";
import { CurrencyService } from "@/services/location/currency/client";
import { LanguageService } from "@/services/location/language/client";

export const useCityCreateFormData = (enabled = true) => {
  return useQuery({
    queryKey: ["city-create-form-data"],
    enabled,
    staleTime: 1000 * 60 * 5,
    queryFn: async () => {
      const [countryData, searchTagData, timezoneData,languageData,currencyData] = await Promise.all([
        CountryService.getMany(),
        SearchTagService.getMany(),
        TimezoneService.getMany(),
        LanguageService.getMany(),
        CurrencyService.getMany()
      ]);

      return {
        countryData,
        searchTagData,
        timezoneData,
        languageData,
        currencyData
      };
    },
  });
};
