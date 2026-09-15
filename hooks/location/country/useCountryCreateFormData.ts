"use client";

import { useCurrencies } from "@/hooks/location/currency";
import { useSearchTags } from "@/hooks/search/tag";
import { useTimezones } from "@/hooks/location/timezone";
import { useLanguages } from "@/hooks/location/language";
import { useBookingTypes } from "@/hooks/commerce/booking-type";
import { useContinents } from "@/hooks/location/country/continent";

import { DEFAULT_LIMIT, DEFAULT_PAGE } from "@/config/react-query.config";

// ======================================================
// CREATE FORM DATA
// ======================================================

export const useCountryCreateFormData = (enabled = true) => {
  const currencyQuery = useCurrencies(DEFAULT_PAGE, DEFAULT_LIMIT, enabled);

  const searchTagQuery = useSearchTags(DEFAULT_PAGE, DEFAULT_LIMIT, enabled);

  const timezoneQuery = useTimezones(DEFAULT_PAGE, DEFAULT_LIMIT, enabled);

  const languageQuery = useLanguages(DEFAULT_PAGE, DEFAULT_LIMIT, enabled);

  const bookingTypeQuery = useBookingTypes(
    DEFAULT_PAGE,
    DEFAULT_LIMIT,
    enabled,
  );

  const continentQuery = useContinents(DEFAULT_PAGE, DEFAULT_LIMIT, enabled);

  const queries = [
    currencyQuery,
    searchTagQuery,
    timezoneQuery,
    languageQuery,
    bookingTypeQuery,
    continentQuery,
  ];

  return {
    // ==================================================
    // DATA
    // ==================================================

    data:
      currencyQuery.data &&
      searchTagQuery.data &&
      timezoneQuery.data &&
      languageQuery.data &&
      bookingTypeQuery.data &&
      continentQuery.data
        ? {
            currencyData: currencyQuery.data,
            searchTagData: searchTagQuery.data,
            timezoneData: timezoneQuery.data,
            languageData: languageQuery.data,
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
      currency: currencyQuery.error as Error | null,

      searchTag: searchTagQuery.error as Error | null,

      timezone: timezoneQuery.error as Error | null,

      language: languageQuery.error as Error | null,

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
