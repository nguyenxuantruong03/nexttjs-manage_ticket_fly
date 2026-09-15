"use client";

import { usePlace } from "@/hooks/location/place";
import { useAddresses } from "@/hooks/location/address";
import { useCountries } from "@/hooks/location/country";
import { useCities } from "@/hooks/location/city";
import { useDistricts } from "@/hooks/location/district";
import { useWards } from "@/hooks/location/ward";
import { useSearchTags } from "@/hooks/search/tag";
import { usePlaceTypes } from "@/hooks/location/place/place-type";
import { useBookingTypes } from "@/hooks/commerce/booking-type";

import { DEFAULT_LIMIT, DEFAULT_PAGE } from "@/config/react-query.config";

// ======================================================
// UPDATE FORM DATA
// ======================================================

export const usePlaceUpdateFormData = (placeId: string, enabled = true) => {
  const placeQuery = usePlace(placeId, enabled);

  const addressQuery = useAddresses(DEFAULT_PAGE, DEFAULT_LIMIT, enabled);

  const countryQuery = useCountries(DEFAULT_PAGE, DEFAULT_LIMIT, enabled);

  const cityQuery = useCities(DEFAULT_PAGE, DEFAULT_LIMIT, enabled);

  const districtQuery = useDistricts(DEFAULT_PAGE, DEFAULT_LIMIT, enabled);

  const wardQuery = useWards(DEFAULT_PAGE, DEFAULT_LIMIT, enabled);

  const searchTagQuery = useSearchTags(DEFAULT_PAGE, DEFAULT_LIMIT, enabled);

  const placeTypeQuery = usePlaceTypes(DEFAULT_PAGE, DEFAULT_LIMIT, enabled);

  const bookingTypeQuery = useBookingTypes(
    DEFAULT_PAGE,
    DEFAULT_LIMIT,
    enabled,
  );

  const queries = [
    placeQuery,
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
    // ==================================================
    // DATA
    // ==================================================

    data:
      placeQuery.data &&
      addressQuery.data &&
      countryQuery.data &&
      cityQuery.data &&
      districtQuery.data &&
      wardQuery.data &&
      searchTagQuery.data &&
      placeTypeQuery.data &&
      bookingTypeQuery.data
        ? {
            initialData: placeQuery.data,
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

    // ==================================================
    // LOADING
    // ==================================================

    isLoading: queries.some((query) => query.isLoading),

    isFetching: queries.some((query) => query.isFetching),

    // ==================================================
    // ERROR
    // ==================================================

    isError: queries.some((query) => query.isError),

    errors: {
      place: placeQuery.error as Error | null,

      address: addressQuery.error as Error | null,

      country: countryQuery.error as Error | null,

      city: cityQuery.error as Error | null,

      district: districtQuery.error as Error | null,

      ward: wardQuery.error as Error | null,

      searchTag: searchTagQuery.error as Error | null,

      placeType: placeTypeQuery.error as Error | null,

      bookingType: bookingTypeQuery.error as Error | null,
    },

    // ==================================================
    // REFETCH
    // ==================================================

    refetch: async () => {
      await Promise.all(queries.map((query) => query.refetch()));
    },
  };
};
