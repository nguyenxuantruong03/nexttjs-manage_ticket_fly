"use client";

import { useCity } from "@/hooks/location/city";
import { useCountries } from "@/hooks/location/country";
import { useSearchTags } from "@/hooks/search/tag";
import { useTimezones } from "@/hooks/location/timezone";
import { useLanguages } from "@/hooks/location/language";
import { useCurrencies } from "@/hooks/location/currency";
import { useBookingTypes } from "@/hooks/commerce/booking-type";
import { useContinents } from "@/hooks/location/country/continent";

import { DEFAULT_LIMIT, DEFAULT_PAGE } from "@/config/react-query.config";

// ======================================================
// UPDATE FORM DATA
// ======================================================

export const useCityUpdateFormData = (cityId: string, enabled = true) => {
  const cityQuery = useCity(cityId, enabled);

  const countryQuery = useCountries(DEFAULT_PAGE, DEFAULT_LIMIT, enabled);

  const searchTagQuery = useSearchTags(DEFAULT_PAGE, DEFAULT_LIMIT, enabled);

  const timezoneQuery = useTimezones(DEFAULT_PAGE, DEFAULT_LIMIT, enabled);

  const languageQuery = useLanguages(DEFAULT_PAGE, DEFAULT_LIMIT, enabled);

  const currencyQuery = useCurrencies(DEFAULT_PAGE, DEFAULT_LIMIT, enabled);

  const bookingTypeQuery = useBookingTypes(
    DEFAULT_PAGE,
    DEFAULT_LIMIT,
    enabled,
  );

  const continentQuery = useContinents(DEFAULT_PAGE, DEFAULT_LIMIT, enabled);

  const queries = [
    cityQuery,
    countryQuery,
    searchTagQuery,
    timezoneQuery,
    languageQuery,
    currencyQuery,
    bookingTypeQuery,
    continentQuery,
  ];

  return {
    // ==================================================
    // DATA
    // ==================================================

    data:
      cityQuery.data &&
      countryQuery.data &&
      searchTagQuery.data &&
      timezoneQuery.data &&
      languageQuery.data &&
      currencyQuery.data &&
      bookingTypeQuery.data &&
      continentQuery.data
        ? {
            initialData: cityQuery.data,
            countryData: countryQuery.data,
            searchTagData: searchTagQuery.data,
            timezoneData: timezoneQuery.data,
            languageData: languageQuery.data,
            currencyData: currencyQuery.data,
            bookingTypeData: bookingTypeQuery.data,
            continentData: continentQuery.data,
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

      searchTag: searchTagQuery.error as Error | null,

      timezone: timezoneQuery.error as Error | null,

      language: languageQuery.error as Error | null,

      currency: currencyQuery.error as Error | null,

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
