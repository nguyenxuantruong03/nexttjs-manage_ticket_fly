"use client";

import { useQuery } from "@tanstack/react-query";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

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
    enabled: enabled && Boolean(providerbookingId),
    staleTime: DEFAULT_QUERY_STALE_TIME,

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
        UserService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        AddressService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        CountryService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        CityService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        DistrictService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        WardService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        BookingTypeService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
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
