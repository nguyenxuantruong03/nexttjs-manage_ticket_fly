"use client";

import { useMediaCategory } from "@/hooks/catalog/media-category";

import { useBookingTypes } from "@/hooks/commerce/booking-type";

export const useMediaCategoryUpdateFormData = (
  mediaCategoryId: string,
  enabled = true,
) => {
  const mediaCategoryQuery = useMediaCategory(mediaCategoryId, enabled);

  const bookingTypeQuery = useBookingTypes(enabled);

  return {
    data:
      mediaCategoryQuery.data && bookingTypeQuery.data
        ? {
            mediaCategoryData: mediaCategoryQuery.data,

            bookingTypes: bookingTypeQuery.data,
          }
        : undefined,

    isLoading: mediaCategoryQuery.isLoading || bookingTypeQuery.isLoading,

    isFetching: mediaCategoryQuery.isFetching || bookingTypeQuery.isFetching,

    isError: mediaCategoryQuery.isError || bookingTypeQuery.isError,

    errors: {
      mediaCategory: mediaCategoryQuery.error as Error | null,

      bookingType: bookingTypeQuery.error as Error | null,
    },

    refetch: async () => {
      await Promise.all([
        mediaCategoryQuery.refetch(),
        bookingTypeQuery.refetch(),
      ]);
    },
  };
};
