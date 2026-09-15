"use client";

import { useCities } from "@/hooks/location/city";
import { useCountries } from "@/hooks/location/country";
import { useBookingTypes } from "@/hooks/commerce/booking-type";
import { useSearchTags } from "@/hooks/search/tag";
import { useTimezones } from "@/hooks/location/timezone";

import { DEFAULT_LIMIT, DEFAULT_PAGE } from "@/config/react-query.config";

// ======================================================
// CREATE FORM DATA
// ======================================================

export const useDistrictCreateFormData = (enabled = true) => {
  const cityQuery = useCities(DEFAULT_PAGE, DEFAULT_LIMIT, enabled);

  const countryQuery = useCountries(DEFAULT_PAGE, DEFAULT_LIMIT, enabled);

  const bookingTypeQuery = useBookingTypes(
    DEFAULT_PAGE,
    DEFAULT_LIMIT,
    enabled,
  );

  const searchTagQuery = useSearchTags(DEFAULT_PAGE, DEFAULT_LIMIT, enabled);

  const timezoneQuery = useTimezones(DEFAULT_PAGE, DEFAULT_LIMIT, enabled);

  const queries = [
    cityQuery,
    countryQuery,
    bookingTypeQuery,
    searchTagQuery,
    timezoneQuery,
  ];

  return {
    // ==================================================
    // DATA
    // ==================================================

    data:
      cityQuery.data &&
      countryQuery.data &&
      bookingTypeQuery.data &&
      searchTagQuery.data &&
      timezoneQuery.data
        ? {
            cityData: cityQuery.data,
            countryData: countryQuery.data,
            bookingTypeData: bookingTypeQuery.data,
            searchTagData: searchTagQuery.data,
            timezones: timezoneQuery.data,
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
      city: cityQuery.error as Error | null,

      country: countryQuery.error as Error | null,

      bookingType: bookingTypeQuery.error as Error | null,

      searchTag: searchTagQuery.error as Error | null,

      timezone: timezoneQuery.error as Error | null,
    },

    // ==================================================
    // REFETCH
    // ==================================================

    refetch: async () => {
      await Promise.all(queries.map((query) => query.refetch()));
    },
  };
};
