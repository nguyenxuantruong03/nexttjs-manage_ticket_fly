"use client";

import { useAddress } from "@/hooks/location/address";
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

export const useAddressUpdateFormData = (addressId: string, enabled = true) => {
  const addressQuery = useAddress(addressId, enabled);
  const cityQuery = useCities(enabled);
  const districtQuery = useDistricts(enabled);
  const wardQuery = useWards(enabled);
  const countryQuery = useCountries(enabled);
  const timezoneQuery = useTimezones(enabled);
  const languageQuery = useLanguages(enabled);
  const currencyQuery = useCurrencies(enabled);
  const searchTagQuery = useSearchTags(enabled);
  const bookingTypeQuery = useBookingTypes(enabled);
  const continentQuery = useContinents(enabled);

  const queries = [
    addressQuery,
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
    data:
      addressQuery.data &&
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
            addressData: addressQuery.data,
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

    isLoading: queries.some((q) => q.isLoading),
    isFetching: queries.some((q) => q.isFetching),
    isError: queries.some((q) => q.isError),

    errors: {
      address: addressQuery.error as Error | null,
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

    refetch: async () => {
      await Promise.all(queries.map((q) => q.refetch()));
    },
  };
};
