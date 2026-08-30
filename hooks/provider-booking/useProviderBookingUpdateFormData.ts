"use client";

import { useQuery } from "@tanstack/react-query";

import { ProviderBookingService } from "@/services/provider-booking/client";
import { UserService } from "@/services/users/client";
import { AddressService } from "@/services/location/address/client";
import { CountryService } from "@/services/location/country/client";
import { CityService } from "@/services/location/city/client";
import { DistrictService } from "@/services/location/district/client";
import { WardService } from "@/services/location/ward/client";
import { BookingTypeService } from "@/services/commerce/booking-type/client";

export const useProviderBookingUpdateFormData = (
  providerbookingId: string,
  enabled = true,
) => {
  const query = useQuery({
    queryKey: ["provider-booking-update-form-data", providerbookingId],
    enabled: enabled && !!providerbookingId,
    staleTime: 1000 * 60 * 5,
    queryFn: async () => {
      const [
        initialData,
        userDatas,
        addresses,
        countries,
        cities,
        districts,
        wards,
        bookingTypeData,
      ] = await Promise.all([
        ProviderBookingService.getOne(providerbookingId),
        UserService.getMany(),
        AddressService.getMany(),
        CountryService.getMany(),
        CityService.getMany(),
        DistrictService.getMany(),
        WardService.getMany(),
        BookingTypeService.getMany(),
      ]);

      return {
        initialData,
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

  return {
    data: query.data,

    isLoading: query.isLoading,
    isFetching: query.isFetching,

    isError: query.isError,
    errors: {
      providerBooking: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};
