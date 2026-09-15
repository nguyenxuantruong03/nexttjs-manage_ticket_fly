"use client";

import { useMediaCategory } from "@/hooks/catalog/media-category";

import { useBookingTypes } from "@/hooks/commerce/booking-type";

import { DEFAULT_LIMIT, DEFAULT_PAGE } from "@/config/react-query.config";

// ======================================================
// UPDATE FORM DATA
// ======================================================

export const useMediaCategoryUpdateFormData = (
  mediaCategoryId: string,
  enabled = true,
) => {
  const mediaCategoryQuery = useMediaCategory(mediaCategoryId, enabled);

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
      mediaCategoryQuery.data && bookingTypeQuery.data
        ? {
            mediaCategoryData: mediaCategoryQuery.data,
            bookingTypes: bookingTypeQuery.data,
          }
        : undefined,

    // ==================================================
    // LOADING
    // ==================================================

    isLoading: mediaCategoryQuery.isLoading || bookingTypeQuery.isLoading,

    isFetching: mediaCategoryQuery.isFetching || bookingTypeQuery.isFetching,

    // ==================================================
    // ERROR
    // ==================================================

    isError: mediaCategoryQuery.isError || bookingTypeQuery.isError,

    errors: {
      mediaCategory: mediaCategoryQuery.error as Error | null,

      bookingType: bookingTypeQuery.error as Error | null,
    },

    // ==================================================
    // REFETCH
    // ==================================================

    refetch: async () => {
      await Promise.all([
        mediaCategoryQuery.refetch(),
        bookingTypeQuery.refetch(),
      ]);
    },
  };
};
