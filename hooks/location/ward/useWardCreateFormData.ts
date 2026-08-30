"use client";

import { useDistricts } from "@/hooks/location/district";
import { useCities } from "@/hooks/location/city";
import { useBookingTypes } from "@/hooks/commerce/booking-type";
import { useSearchTags } from "@/hooks/search/tag";

export const useWardCreateFormData = (enabled = true) => {
  const districtQuery = useDistricts(enabled);
  const cityQuery = useCities(enabled);
  const bookingTypeQuery = useBookingTypes(enabled);
  const searchTagQuery = useSearchTags(enabled);

  const queries = [districtQuery, cityQuery, bookingTypeQuery, searchTagQuery];

  return {
    data:
      districtQuery.data &&
      cityQuery.data &&
      bookingTypeQuery.data &&
      searchTagQuery.data
        ? {
            districtData: districtQuery.data,
            cityData: cityQuery.data,
            bookingTypeData: bookingTypeQuery.data,
            searchTagData: searchTagQuery.data,
          }
        : undefined,

    isLoading: queries.some((q) => q.isLoading),
    isFetching: queries.some((q) => q.isFetching),
    isError: queries.some((q) => q.isError),

    errors: {
      district: districtQuery.error as Error | null,
      city: cityQuery.error as Error | null,
      bookingType: bookingTypeQuery.error as Error | null,
      searchTag: searchTagQuery.error as Error | null,
    },

    refetch: async () => {
      await Promise.all(queries.map((q) => q.refetch()));
    },
  };
};
