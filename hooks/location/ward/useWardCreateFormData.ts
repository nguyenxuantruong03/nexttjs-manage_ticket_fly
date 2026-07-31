"use client";

import { useQuery } from "@tanstack/react-query";

import { DistrictService } from "@/services/location/district/client";
import { CityService } from "@/services/location/city/client";

export const useWardCreateFormData = (enabled = true) => {
  return useQuery({
    queryKey: ["ward-create-form-data"],
    enabled,
    staleTime: 1000 * 60 * 5,
    queryFn: async () => {
      const [districtData, cityData] = await Promise.all([
        DistrictService.getMany(),
        CityService.getMany(),
      ]);

      return {
        districtData,
        cityData,
      };
    },
  });
};
