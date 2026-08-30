"use client";

import { useAddresses } from "@/hooks/location/address";
import { useCountries } from "@/hooks/location/country";
import { useCities } from "@/hooks/location/city";
import { useDistricts } from "@/hooks/location/district";
import { useWards } from "@/hooks/location/ward";
import { useSearchTags } from "@/hooks/search/tag";
import { usePlaceTypes } from "@/hooks/location/place/place-type";
import { useBookingTypes } from "@/hooks/commerce/booking-type";

export const usePlaceCreateFormData = (enabled = true) => {
  const addressQuery = useAddresses(enabled);
  const countryQuery = useCountries(enabled);
  const cityQuery = useCities(enabled);
  const districtQuery = useDistricts(enabled);
  const wardQuery = useWards(enabled);
  const searchTagQuery = useSearchTags(enabled);
  const placeTypeQuery = usePlaceTypes(enabled);
  const bookingTypeQuery = useBookingTypes(enabled);

  const queries = [
    addressQuery,
    countryQuery,
    cityQuery,
    districtQuery,
    wardQuery,
    searchTagQuery,
    placeTypeQuery,
    bookingTypeQuery,
  ];

  return {
    data:
      addressQuery.data &&
      countryQuery.data &&
      cityQuery.data &&
      districtQuery.data &&
      wardQuery.data &&
      searchTagQuery.data &&
      placeTypeQuery.data &&
      bookingTypeQuery.data
        ? {
            addresses: addressQuery.data,
            countries: countryQuery.data,
            cities: cityQuery.data,
            districts: districtQuery.data,
            wards: wardQuery.data,
            searchTag: searchTagQuery.data,
            placeTypeData: placeTypeQuery.data,
            bookingTypeData: bookingTypeQuery.data,
          }
        : undefined,

    isLoading: queries.some((q) => q.isLoading),
    isFetching: queries.some((q) => q.isFetching),
    isError: queries.some((q) => q.isError),

    errors: {
      address: addressQuery.error as Error | null,
      country: countryQuery.error as Error | null,
      city: cityQuery.error as Error | null,
      district: districtQuery.error as Error | null,
      ward: wardQuery.error as Error | null,
      searchTag: searchTagQuery.error as Error | null,
      placeType: placeTypeQuery.error as Error | null,
      bookingType: bookingTypeQuery.error as Error | null,
    },

    refetch: async () => {
      await Promise.all(queries.map((q) => q.refetch()));
    },
  };
};
