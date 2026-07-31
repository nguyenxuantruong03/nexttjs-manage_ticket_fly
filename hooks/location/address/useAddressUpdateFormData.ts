"use client";

import { useQuery } from "@tanstack/react-query";

import { AddressService } from "@/services/location/address/client";
import { CityService } from "@/services/location/city/client";
import { CountryService } from "@/services/location/country/client";
import { DistrictService } from "@/services/location/district/client";
import { WardService } from "@/services/location/ward/client";
import { TimezoneService } from "@/services/location/timezone/client";
import { LanguageService } from "@/services/location/language/client";
import { CurrencyService } from "@/services/location/currency/client";
import { SearchTagService } from "@/services/search/tag/client";


export const useAddressUpdateFormData = (addressId: string, enabled = true) => {
  return useQuery({
    queryKey: ["address-update", addressId],

    enabled: enabled && !!addressId,

    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const [
        addressData,
        cityData,
        districtData,
        wardData,
        countryData,
        timezoneData,
        languageData,
        currencyData,
        searchTagData,
      ] = await Promise.all([
        AddressService.getOne(addressId),

        CityService.getMany(),

        DistrictService.getMany(),

        WardService.getMany(),

        CountryService.getMany(),

        TimezoneService.getMany(),

        LanguageService.getMany(),

        CurrencyService.getMany(),

        SearchTagService.getMany(),
      ]);

      return {
        // Current Address
        addressData,

        // Location
        cityData,
        districtData,
        wardData,
        countryData,

        // Master Data
        timezoneData,
        languageData,
        currencyData,

        // Search
        searchTagData,
      };
    },
  });
};
