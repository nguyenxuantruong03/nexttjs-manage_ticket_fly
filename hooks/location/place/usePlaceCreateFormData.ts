"use client";

import { useQuery } from "@tanstack/react-query";

import { AddressService } from "@/services/location/address/client";
import { CountryService } from "@/services/location/country/client";
import { CityService } from "@/services/location/city/client";
import { DistrictService } from "@/services/location/district/client";
import { WardService } from "@/services/location/ward/client";
import { SearchTagService } from "@/services/search/tag/client";
import { PlaceTypeService } from "@/services/location/place/place-type/client";
import { BookingTypeService } from "@/services/commerce/booking-type/client";

export const usePlaceCreateFormData = (enabled = true) => {
  return useQuery({
    queryKey: ["place-create-form-data"],
    enabled,
    staleTime: 1000 * 60 * 5,
    queryFn: async () => {
      const [
        addresses,
        countries,
        cities,
        districts,
        wards,
        searchTag,
        placeTypeData,
        bookingTypeData,
      ] = await Promise.all([
        AddressService.getMany(),
        CountryService.getMany(),
        CityService.getMany(),
        DistrictService.getMany(),
        WardService.getMany(),
        SearchTagService.getMany(),
        PlaceTypeService.getMany(),
        BookingTypeService.getMany()
      ]);

      return {
        addresses,
        countries,
        cities,
        districts,
        wards,
        searchTag,
        placeTypeData,
        bookingTypeData,
      };
    },
  });
};
