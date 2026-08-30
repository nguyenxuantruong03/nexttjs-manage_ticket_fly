"use client";

import { useCities } from "@/hooks/location/city";
import { useCountries } from "@/hooks/location/country";
import { useBookingTypes } from "@/hooks/commerce/booking-type";
import { useSearchTags } from "@/hooks/search/tag";
import { useTimezones } from "@/hooks/location/timezone";

export const useDistrictCreateFormData = (enabled = true) => {
  const cityQuery = useCities(enabled);
  const countryQuery = useCountries(enabled);
  const bookingTypeQuery = useBookingTypes(enabled);
  const searchTagQuery = useSearchTags(enabled);
  const timezoneQuery = useTimezones(enabled);

  const queries = [
    cityQuery,
    countryQuery,
    bookingTypeQuery,
    searchTagQuery,
    timezoneQuery,
  ];

  return {
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

    isLoading: queries.some((q) => q.isLoading),
    isFetching: queries.some((q) => q.isFetching),
    isError: queries.some((q) => q.isError),

    errors: {
      city: cityQuery.error as Error | null,
      country: countryQuery.error as Error | null,
      bookingType: bookingTypeQuery.error as Error | null,
      searchTag: searchTagQuery.error as Error | null,
      timezone: timezoneQuery.error as Error | null,
    },

    refetch: async () => {
      await Promise.all(queries.map((q) => q.refetch()));
    },
  };
};
