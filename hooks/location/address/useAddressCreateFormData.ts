"use client";

import { useCities } from "@/hooks/location/city";
import { useDistricts } from "@/hooks/location/district";
import { useWards } from "@/hooks/location/ward";
import { useCountries } from "@/hooks/location/country";
import { useTimezones } from "@/hooks/location/timezone";
import { useLanguages } from "@/hooks/location/language";
import { useCurrencies } from "@/hooks/location/currency";
import { useSearchTags } from "@/hooks/search/tag";
import { useBookingTypes } from "@/hooks/commerce/booking-type";
import { useContinents } from "@/hooks/location/country/continent";

import { DEFAULT_LIMIT, DEFAULT_PAGE } from "@/config/react-query.config";

// ======================================================
// CREATE FORM DATA
// ======================================================

export const useAddressCreateFormData = (enabled = true) => {
  const cityQuery = useCities(DEFAULT_PAGE, DEFAULT_LIMIT, enabled);

  const districtQuery = useDistricts(DEFAULT_PAGE, DEFAULT_LIMIT, enabled);

  const wardQuery = useWards(DEFAULT_PAGE, DEFAULT_LIMIT, enabled);

  const countryQuery = useCountries(DEFAULT_PAGE, DEFAULT_LIMIT, enabled);

  const timezoneQuery = useTimezones(DEFAULT_PAGE, DEFAULT_LIMIT, enabled);

  const languageQuery = useLanguages(DEFAULT_PAGE, DEFAULT_LIMIT, enabled);

  const currencyQuery = useCurrencies(DEFAULT_PAGE, DEFAULT_LIMIT, enabled);

  const searchTagQuery = useSearchTags(DEFAULT_PAGE, DEFAULT_LIMIT, enabled);

  const bookingTypeQuery = useBookingTypes(
    DEFAULT_PAGE,
    DEFAULT_LIMIT,
    enabled,
  );

  const continentQuery = useContinents(DEFAULT_PAGE, DEFAULT_LIMIT, enabled);

  const queries = [
    cityQuery,
    districtQuery,
    wardQuery,
    countryQuery,
    timezoneQuery,
    languageQuery,
    currencyQuery,
    searchTagQuery,
    bookingTypeQuery,
    continentQuery,
  ];

  return {
    // ==================================================
    // DATA
    // ==================================================

    data:
      cityQuery.data &&
      districtQuery.data &&
      wardQuery.data &&
      countryQuery.data &&
      timezoneQuery.data &&
      languageQuery.data &&
      currencyQuery.data &&
      searchTagQuery.data &&
      bookingTypeQuery.data &&
      continentQuery.data
        ? {
            cityData: cityQuery.data,
            districtData: districtQuery.data,
            wardData: wardQuery.data,
            countryData: countryQuery.data,
            timezoneData: timezoneQuery.data,
            languageData: languageQuery.data,
            currencyData: currencyQuery.data,
            searchTagData: searchTagQuery.data,
            bookingTypeData: bookingTypeQuery.data,
            continentsData: continentQuery.data,
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

      district: districtQuery.error as Error | null,

      ward: wardQuery.error as Error | null,

      country: countryQuery.error as Error | null,

      timezone: timezoneQuery.error as Error | null,

      language: languageQuery.error as Error | null,

      currency: currencyQuery.error as Error | null,

      searchTag: searchTagQuery.error as Error | null,

      bookingType: bookingTypeQuery.error as Error | null,

      continent: continentQuery.error as Error | null,
    },

    // ==================================================
    // REFETCH
    // ==================================================

    refetch: async () => {
      await Promise.all(queries.map((query) => query.refetch()));
    },
  };
};
