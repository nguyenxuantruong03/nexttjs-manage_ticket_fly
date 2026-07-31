"use client";

import { useQuery } from "@tanstack/react-query";

import { CityService } from "@/services/location/city/client";
import { CountryService } from "@/services/location/country/client";

export const useDistrictCreateFormData = (enabled = true) => {
  return useQuery({
    queryKey: ["district-create-form-data"],
    enabled,
    staleTime: 1000 * 60 * 5,
    queryFn: async () => {
      const [cityData, countryData] = await Promise.all([
        CityService.getMany(),
        CountryService.getMany(),
      ]);

      return {
        cityData,
        countryData,
      };
    },
  });
};
