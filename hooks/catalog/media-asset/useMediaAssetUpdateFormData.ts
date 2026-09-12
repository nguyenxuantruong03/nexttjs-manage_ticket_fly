"use client";

import { useMediaAsset } from "@/hooks/catalog/media-asset";

import { useBookingTypes } from "@/hooks/commerce/booking-type";

export const useMediaAssetUpdateFormData = (
  mediaAssetId: string,
  enabled = true,
) => {
  const mediaAssetQuery = useMediaAsset(mediaAssetId, enabled);

  const bookingTypeQuery = useBookingTypes(enabled);

  return {
    data:
      mediaAssetQuery.data && bookingTypeQuery.data
        ? {
            mediaAssetData: mediaAssetQuery.data,

            bookingTypes: bookingTypeQuery.data,
          }
        : undefined,

    isLoading: mediaAssetQuery.isLoading || bookingTypeQuery.isLoading,

    isFetching: mediaAssetQuery.isFetching || bookingTypeQuery.isFetching,

    isError: mediaAssetQuery.isError || bookingTypeQuery.isError,

    errors: {
      mediaAsset: mediaAssetQuery.error as Error | null,

      bookingType: bookingTypeQuery.error as Error | null,
    },

    refetch: async () => {
      await Promise.all([
        mediaAssetQuery.refetch(),

        bookingTypeQuery.refetch(),
      ]);
    },
  };
};
