// hooks/location/useLocationFormData.ts
"use client";

import { useQuery } from "@tanstack/react-query";

import { CountryService } from "@/services/location/country/client";
import { CityService } from "@/services/location/city/client";
import { DistrictService } from "@/services/location/district/client";
import { WardService } from "@/services/location/ward/client";
import { AddressService } from "@/services/location/address/client";

export const useLocationFormData = (
  queryKey = ["location-form-data"],
  enabled = true,
) => {
  return useQuery({
    queryKey,
    enabled,
    staleTime: 1000 * 60 * 5,
    queryFn: async () => {
      const [addresses, countries, cities, districts, wards] =
        await Promise.all([
          AddressService.getMany(),
          CountryService.getMany(),
          CityService.getMany(),
          DistrictService.getMany(),
          WardService.getMany(),
        ]);

      return {
        addresses,
        countries,
        cities,
        districts,
        wards,
      };
    },
  });
};
