"use client";

import { useWard } from "@/hooks/location/ward";
import { useDistricts } from "@/hooks/location/district";
import { useCities } from "@/hooks/location/city";
import { useBookingTypes } from "@/hooks/commerce/booking-type";
import { useSearchTags } from "@/hooks/search/tag";

import { DEFAULT_LIMIT, DEFAULT_PAGE } from "@/config/react-query.config";

// ======================================================
// UPDATE FORM DATA
// ======================================================

export const useWardUpdateFormData = (wardId: string, enabled = true) => {
  const wardQuery = useWard(wardId, enabled);

  const districtQuery = useDistricts(DEFAULT_PAGE, DEFAULT_LIMIT, enabled);

  const cityQuery = useCities(DEFAULT_PAGE, DEFAULT_LIMIT, enabled);

  const bookingTypeQuery = useBookingTypes(
    DEFAULT_PAGE,
    DEFAULT_LIMIT,
    enabled,
  );

  const searchTagQuery = useSearchTags(DEFAULT_PAGE, DEFAULT_LIMIT, enabled);

  const queries = [
    wardQuery,
    districtQuery,
    cityQuery,
    bookingTypeQuery,
    searchTagQuery,
  ];

  return {
    // ==================================================
    // DATA
    // ==================================================

    data:
      wardQuery.data &&
      districtQuery.data &&
      cityQuery.data &&
      bookingTypeQuery.data &&
      searchTagQuery.data
        ? {
            initialData: wardQuery.data,
            districtData: districtQuery.data,
            cityData: cityQuery.data,
            bookingTypeData: bookingTypeQuery.data,
            searchTagData: searchTagQuery.data,
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
      ward: wardQuery.error as Error | null,

      district: districtQuery.error as Error | null,

      city: cityQuery.error as Error | null,

      bookingType: bookingTypeQuery.error as Error | null,

      searchTag: searchTagQuery.error as Error | null,
    },

    // ==================================================
    // REFETCH
    // ==================================================

    refetch: async () => {
      await Promise.all(queries.map((query) => query.refetch()));
    },
  };
};
