"use client";

import { useQuery } from "@tanstack/react-query";

import { UserService } from "@/services/users/client";
import { AddressService } from "@/services/location/address/client";
import { CountryService } from "@/services/location/country/client";
import { CityService } from "@/services/location/city/client";
import { DistrictService } from "@/services/location/district/client";
import { WardService } from "@/services/location/ward/client";
import { BookingTypeService } from "@/services/commerce/booking-type/client";

export const useProviderBookingCreateFormData = (enabled = true) => {
  return useQuery({
    queryKey: ["provider-booking-create-form-data"],
    enabled,
    staleTime: 1000 * 60 * 5,
    queryFn: async () => {
      const [
        userDatas,
        addresses,
        countries,
        cities,
        districts,
        wards,
        bookingTypeData,
      ] = await Promise.all([
        UserService.getMany(),
        AddressService.getMany(),
        CountryService.getMany(),
        CityService.getMany(),
        DistrictService.getMany(),
        WardService.getMany(),
        BookingTypeService.getMany(),
      ]);

      return {
        userDatas,
        addresses,
        countries,
        cities,
        districts,
        wards,
        bookingTypeData,
      };
    },
  });
};
