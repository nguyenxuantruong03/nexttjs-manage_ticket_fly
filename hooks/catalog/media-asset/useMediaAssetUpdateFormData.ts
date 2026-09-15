"use client";

import { useMediaAsset } from "@/hooks/catalog/media-asset";

import { useBookingTypes } from "@/hooks/commerce/booking-type";

import { DEFAULT_LIMIT, DEFAULT_PAGE } from "@/config/react-query.config";

// ======================================================
// UPDATE FORM DATA
// ======================================================

export const useMediaAssetUpdateFormData = (
  mediaAssetId: string,
  enabled = true,
) => {
  const mediaAssetQuery = useMediaAsset(mediaAssetId, enabled);

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
      mediaAssetQuery.data && bookingTypeQuery.data
        ? {
            mediaAssetData: mediaAssetQuery.data,
            bookingTypes: bookingTypeQuery.data,
          }
        : undefined,

    // ==================================================
    // LOADING
    // ==================================================

    isLoading: mediaAssetQuery.isLoading || bookingTypeQuery.isLoading,

    isFetching: mediaAssetQuery.isFetching || bookingTypeQuery.isFetching,

    // ==================================================
    // ERROR
    // ==================================================

    isError: mediaAssetQuery.isError || bookingTypeQuery.isError,

    errors: {
      mediaAsset: mediaAssetQuery.error as Error | null,

      bookingType: bookingTypeQuery.error as Error | null,
    },

    // ==================================================
    // REFETCH
    // ==================================================

    refetch: async () => {
      await Promise.all([
        mediaAssetQuery.refetch(),
        bookingTypeQuery.refetch(),
      ]);
    },
  };
};
