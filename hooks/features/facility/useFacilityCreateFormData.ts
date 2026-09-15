"use client";

import { useBookingTypes } from "@/hooks/commerce/booking-type";
import { useFacilityCategories } from "@/hooks/features/facility-category";

import { DEFAULT_LIMIT, DEFAULT_PAGE } from "@/config/react-query.config";

// ======================================================
// CREATE FORM DATA
// ======================================================

export const useFacilityCreateFormData = (enabled = true) => {
  const bookingTypeQuery = useBookingTypes(
    DEFAULT_PAGE,
    DEFAULT_LIMIT,
    enabled,
  );

  const facilityCategoryQuery = useFacilityCategories(
    DEFAULT_PAGE,
    DEFAULT_LIMIT,
    enabled,
  );

  return {
    // ==================================================
    // DATA
    // ==================================================

    data:
      bookingTypeQuery.data && facilityCategoryQuery.data
        ? {
            bookingTypeData: bookingTypeQuery.data,

            facilityCategoryData: facilityCategoryQuery.data,
          }
        : undefined,

    // ==================================================
    // LOADING
    // ==================================================

    isLoading: bookingTypeQuery.isLoading || facilityCategoryQuery.isLoading,

    isFetching: bookingTypeQuery.isFetching || facilityCategoryQuery.isFetching,

    // ==================================================
    // ERROR
    // ==================================================

    isError: bookingTypeQuery.isError || facilityCategoryQuery.isError,

    errors: {
      bookingType: bookingTypeQuery.error as Error | null,

      facilityCategory: facilityCategoryQuery.error as Error | null,
    },

    // ==================================================
    // REFETCH
    // ==================================================

    refetch: async () => {
      await Promise.all([
        bookingTypeQuery.refetch(),
        facilityCategoryQuery.refetch(),
      ]);
    },
  };
};
