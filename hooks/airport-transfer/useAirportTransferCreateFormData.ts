"use client";

import { useQuery } from "@tanstack/react-query";

import { SearchTagService } from "@/services/search/tag/client";
import { AddressService } from "@/services/location/address/client";
import { CountryService } from "@/services/location/country/client";
import { CityService } from "@/services/location/city/client";
import { DistrictService } from "@/services/location/district/client";
import { WardService } from "@/services/location/ward/client";

export const useAirportTransferCreateFormData = (enabled = true) => {
  return useQuery({
    queryKey: ["airport-transfer-create-form-data"],
    enabled,
    staleTime: 1000 * 60 * 5,
    queryFn: async () => {
      const [searchTagData, addresses, countries, cities, districts, wards] =
        await Promise.all([
          SearchTagService.getMany(),
          AddressService.getMany(),
          CountryService.getMany(),
          CityService.getMany(),
          DistrictService.getMany(),
          WardService.getMany(),
        ]);

      return {
        searchTagData,
        addresses,
        countries,
        cities,
        districts,
        wards,
      };
    },
  });
};
