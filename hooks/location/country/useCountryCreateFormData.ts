"use client";

import { useCurrencies } from "@/hooks/location/currency";
import { useSearchTags } from "@/hooks/search/tag";
import { useTimezones } from "@/hooks/location/timezone";
import { useLanguages } from "@/hooks/location/language";
import { useBookingTypes } from "@/hooks/commerce/booking-type";
import { useContinents } from "@/hooks/location/country/continent";

export const useCountryCreateFormData = (enabled = true) => {
  const currencyQuery = useCurrencies(enabled);
  const searchTagQuery = useSearchTags(enabled);
  const timezoneQuery = useTimezones(enabled);
  const languageQuery = useLanguages(enabled);
  const bookingTypeQuery = useBookingTypes(enabled);
  const continentQuery = useContinents(enabled);

  const queries = [
    currencyQuery,
    searchTagQuery,
    timezoneQuery,
    languageQuery,
    bookingTypeQuery,
    continentQuery,
  ];

  return {
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

    isLoading: queries.some((q) => q.isLoading),
    isFetching: queries.some((q) => q.isFetching),
    isError: queries.some((q) => q.isError),

    errors: {
      currency: currencyQuery.error as Error | null,
      searchTag: searchTagQuery.error as Error | null,
      timezone: timezoneQuery.error as Error | null,
      language: languageQuery.error as Error | null,
      bookingType: bookingTypeQuery.error as Error | null,
      continent: continentQuery.error as Error | null,
    },

    refetch: async () => {
      await Promise.all(queries.map((q) => q.refetch()));
    },
  };
};
