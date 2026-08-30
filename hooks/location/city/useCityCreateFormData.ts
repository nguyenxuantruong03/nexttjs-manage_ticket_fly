"use client";

import { useCountries } from "@/hooks/location/country";
import { useSearchTags } from "@/hooks/search/tag";
import { useTimezones } from "@/hooks/location/timezone";
import { useLanguages } from "@/hooks/location/language";
import { useCurrencies } from "@/hooks/location/currency";
import { useBookingTypes } from "@/hooks/commerce/booking-type";
import { useContinents } from "@/hooks/location/country/continent";

export const useCityCreateFormData = (enabled = true) => {
  const countryQuery = useCountries(enabled);
  const searchTagQuery = useSearchTags(enabled);
  const timezoneQuery = useTimezones(enabled);
  const languageQuery = useLanguages(enabled);
  const currencyQuery = useCurrencies(enabled);
  const bookingTypeQuery = useBookingTypes(enabled);
  const continentQuery = useContinents(enabled);

  const queries = [
    countryQuery,
    searchTagQuery,
    timezoneQuery,
    languageQuery,
    currencyQuery,
    bookingTypeQuery,
    continentQuery,
  ];

  return {
    data:
      countryQuery.data &&
      searchTagQuery.data &&
      timezoneQuery.data &&
      languageQuery.data &&
      currencyQuery.data &&
      bookingTypeQuery.data &&
      continentQuery.data
        ? {
            countryData: countryQuery.data,
            searchTagData: searchTagQuery.data,
            timezoneData: timezoneQuery.data,
            languageData: languageQuery.data,
            currencyData: currencyQuery.data,
            bookingTypeData: bookingTypeQuery.data,
            continentData: continentQuery.data,
          }
        : undefined,

    isLoading: queries.some((q) => q.isLoading),
    isFetching: queries.some((q) => q.isFetching),
    isError: queries.some((q) => q.isError),

    errors: {
      country: countryQuery.error as Error | null,
      searchTag: searchTagQuery.error as Error | null,
      timezone: timezoneQuery.error as Error | null,
      language: languageQuery.error as Error | null,
      currency: currencyQuery.error as Error | null,
      bookingType: bookingTypeQuery.error as Error | null,
      continent: continentQuery.error as Error | null,
    },

    refetch: async () => {
      await Promise.all(queries.map((q) => q.refetch()));
    },
  };
};
