"use client";

import { useFacilityCategory } from "@/hooks/features/facility-category";
import { useBookingTypes } from "@/hooks/commerce/booking-type";

import { DEFAULT_LIMIT, DEFAULT_PAGE } from "@/config/react-query.config";

// ======================================================
// UPDATE FORM DATA
// ======================================================

export const useFacilityCategoryUpdateFormData = (
  facilityCategoryId: string,
  enabled = true,
) => {
  const facilityCategoryQuery = useFacilityCategory(
    facilityCategoryId,
    enabled,
  );

  const bookingTypeQuery = useBookingTypes(
    DEFAULT_PAGE,
    DEFAULT_LIMIT,
    enabled,
  );

  return {
    // ==================================================
    // DATA
    // ==================================================

    data:
      facilityCategoryQuery.data && bookingTypeQuery.data
        ? {
            facilityCategoryData: facilityCategoryQuery.data,

            bookingTypeData: bookingTypeQuery.data,
          }
        : undefined,

    // ==================================================
    // LOADING
    // ==================================================

    isLoading: facilityCategoryQuery.isLoading || bookingTypeQuery.isLoading,

    isFetching: facilityCategoryQuery.isFetching || bookingTypeQuery.isFetching,

    // ==================================================
    // ERROR
    // ==================================================

    isError: facilityCategoryQuery.isError || bookingTypeQuery.isError,

    errors: {
      facilityCategory: facilityCategoryQuery.error as Error | null,

      bookingType: bookingTypeQuery.error as Error | null,
    },

    // ==================================================
    // REFETCH
    // ==================================================

    refetch: async () => {
      await Promise.all([
        facilityCategoryQuery.refetch(),
        bookingTypeQuery.refetch(),
      ]);
    },
  };
};
