"use client";

import { useQuery } from "@tanstack/react-query";

import { CurrencyService } from "@/services/location/currency/client";
import { LanguageService } from "@/services/location/language/client";
import { TimezoneService } from "@/services/location/timezone/client";
import { SearchTagService } from "@/services/search/tag/client";

export const useCountryCreateFormData = (enabled = true) => {
  return useQuery({
    queryKey: ["country-create-form-data"],
    enabled,
    staleTime: 1000 * 60 * 5,
    queryFn: async () => {
      const [currencyData, searchTagData, timezoneData, languageData] =
        await Promise.all([
          CurrencyService.getMany(),
          SearchTagService.getMany(),
          TimezoneService.getMany(),
          LanguageService.getMany(),
        ]);

      return {
        currencyData,
        searchTagData,
        timezoneData,
        languageData,
      };
    },
  });
};
