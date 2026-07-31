"use client";

import { useQuery } from "@tanstack/react-query";

import { AirportTransferService } from "@/services/airport-transfer/client";
import { SearchTagService } from "@/services/search/tag/client";
import { AddressService } from "@/services/location/address/client";
import { CountryService } from "@/services/location/country/client";
import { CityService } from "@/services/location/city/client";
import { DistrictService } from "@/services/location/district/client";
import { WardService } from "@/services/location/ward/client";

export const useAirportTransferUpdateFormData = (
  airportTransferId: string,
  enabled = true,
) => {
  return useQuery({
    queryKey: ["airport-transfer-form", airportTransferId],
    enabled: enabled && !!airportTransferId,
    staleTime: 1000 * 60 * 5,
    queryFn: async () => {
      const [
        initialData,
        searchTagData,
        addresses,
        countries,
        cities,
        districts,
        wards,
      ] = await Promise.all([
        AirportTransferService.getOne(airportTransferId),
        SearchTagService.getMany(),
        AddressService.getMany(),
        CountryService.getMany(),
        CityService.getMany(),
        DistrictService.getMany(),
        WardService.getMany(),
      ]);

      return {
        initialData,
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
