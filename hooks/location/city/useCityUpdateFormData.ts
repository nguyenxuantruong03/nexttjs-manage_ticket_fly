"use client";

import { useQuery } from "@tanstack/react-query";

import { CityService } from "@/services/location/city/client";
import { CountryService } from "@/services/location/country/client";
import { SearchTagService } from "@/services/search/tag/client";
import { TimezoneService } from "@/services/location/timezone/client";
import { LanguageService } from "@/services/location/language/client";
import { CurrencyService } from "@/services/location/currency/client";

export const useCityUpdateFormData = (
  cityId: string,
  enabled = true
) => {
  return useQuery({
    queryKey: ["city-update-form-data", cityId],
    enabled: enabled && !!cityId,
    staleTime: 1000 * 60 * 5,
    queryFn: async () => {
      const [
        initialData,
        countryData,
        searchTagData,
        timezoneData,
        languageData,
        currencyData
      ] = await Promise.all([
        CityService.getOne(cityId),
        CountryService.getMany(),
        SearchTagService.getMany(),
        TimezoneService.getMany(),
        LanguageService.getMany(),
        CurrencyService.getMany()
      ]);

      return {
        initialData,
        countryData,
        searchTagData,
        timezoneData,
        languageData,
        currencyData
      };
    },
  });
};