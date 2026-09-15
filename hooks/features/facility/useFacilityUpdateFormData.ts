"use client";

import { useFacility } from "@/hooks/features/facility";
import { useFacilityCategories } from "@/hooks/features/facility-category";
import { useBookingTypes } from "@/hooks/commerce/booking-type";

import { DEFAULT_LIMIT, DEFAULT_PAGE } from "@/config/react-query.config";

// ======================================================
// UPDATE FORM DATA
// ======================================================

export const useFacilityUpdateFormData = (
  facilityId: string,
  enabled = true,
) => {
  const facilityQuery = useFacility(facilityId, enabled);

  const facilityCategoryQuery = useFacilityCategories(
    DEFAULT_PAGE,
    DEFAULT_LIMIT,
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
      facilityQuery.data && facilityCategoryQuery.data && bookingTypeQuery.data
        ? {
            facilityData: facilityQuery.data,

            facilityCategoryData: facilityCategoryQuery.data,

            bookingTypeData: bookingTypeQuery.data,
          }
        : undefined,

    // ==================================================
    // LOADING
    // ==================================================

    isLoading:
      facilityQuery.isLoading ||
      facilityCategoryQuery.isLoading ||
      bookingTypeQuery.isLoading,

    isFetching:
      facilityQuery.isFetching ||
      facilityCategoryQuery.isFetching ||
      bookingTypeQuery.isFetching,

    // ==================================================
    // ERROR
    // ==================================================

    isError:
      facilityQuery.isError ||
      facilityCategoryQuery.isError ||
      bookingTypeQuery.isError,

    errors: {
      facility: facilityQuery.error as Error | null,

      facilityCategory: facilityCategoryQuery.error as Error | null,

      bookingType: bookingTypeQuery.error as Error | null,
    },

    // ==================================================
    // REFETCH
    // ==================================================

    refetch: async () => {
      await Promise.all([
        facilityQuery.refetch(),
        facilityCategoryQuery.refetch(),
        bookingTypeQuery.refetch(),
      ]);
    },
  };
};
