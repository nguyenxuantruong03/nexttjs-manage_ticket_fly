"use client";

import { useQuery } from "@tanstack/react-query";

import { DistrictService } from "@/services/location/district/client";
import { CityService } from "@/services/location/city/client";
import { CountryService } from "@/services/location/country/client";

export const useDistrictUpdateFormData = (
  districtId: string,
  enabled = true,
) => {
  return useQuery({
    queryKey: ["district-update-form-data", districtId],
    enabled: enabled && !!districtId,
    staleTime: 1000 * 60 * 5,
    queryFn: async () => {
      const [initialData, cityData, countryData] = await Promise.all([
        DistrictService.getOne(districtId),
        CityService.getMany(),
        CountryService.getMany(),
      ]);

      return {
        initialData,
        cityData,
        countryData
      };
    },
  });
};
