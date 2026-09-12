"use client";

import { useBookingTypes } from "@/hooks/commerce/booking-type";

import { useCurrencies } from "@/hooks/location/currency";

import { useMediaAssets } from "@/hooks/catalog/media-asset";

export const usePackageCreateFormData = (enabled = true) => {
  const bookingTypeQuery = useBookingTypes(enabled);

  const currencyQuery = useCurrencies(enabled);

  const mediaAssetQuery = useMediaAssets(enabled);

  return {
    data:
      bookingTypeQuery.data &&
      currencyQuery.data &&
      mediaAssetQuery.data
        ? {
            bookingTypeData: bookingTypeQuery.data,
            currencyData: currencyQuery.data,
            mediaAssetData: mediaAssetQuery.data,
          }
        : undefined,

    isLoading:
      bookingTypeQuery.isLoading ||
      currencyQuery.isLoading ||
      mediaAssetQuery.isLoading,

    isFetching:
      bookingTypeQuery.isFetching ||
      currencyQuery.isFetching ||
      mediaAssetQuery.isFetching,

    isError:
      bookingTypeQuery.isError ||
      currencyQuery.isError ||
      mediaAssetQuery.isError,

    errors: {
      bookingType: bookingTypeQuery.error as Error | null,
      currency: currencyQuery.error as Error | null,
      mediaAsset: mediaAssetQuery.error as Error | null,
    },

    refetch: async () => {
      await Promise.all([
        bookingTypeQuery.refetch(),
        currencyQuery.refetch(),
        mediaAssetQuery.refetch(),
      ]);
    },
  };
};