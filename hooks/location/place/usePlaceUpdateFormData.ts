"use client";

import { useQuery } from "@tanstack/react-query";

import { PlaceService } from "@/services/location/place/client";
import { AddressService } from "@/services/location/address/client";
import { CountryService } from "@/services/location/country/client";
import { CityService } from "@/services/location/city/client";
import { DistrictService } from "@/services/location/district/client";
import { WardService } from "@/services/location/ward/client";
import { SearchTagService } from "@/services/search/tag/client";

export const usePlaceUpdateFormData = (placeId: string, enabled = true) => {
  return useQuery({
    queryKey: ["place-update-form-data", placeId],
    enabled: enabled && !!placeId,
    staleTime: 1000 * 60 * 5,
    queryFn: async () => {
      const [
        initialData,
        addresses,
        countries,
        cities,
        districts,
        wards,
        searchTag,
      ] = await Promise.all([
        PlaceService.getOne(placeId),
        AddressService.getMany(),
        CountryService.getMany(),
        CityService.getMany(),
        DistrictService.getMany(),
        WardService.getMany(),
        SearchTagService.getMany(),
      ]);

      return {
        initialData,
        addresses,
        countries,
        cities,
        districts,
        wards,
        searchTag,
      };
    },
  });
};
