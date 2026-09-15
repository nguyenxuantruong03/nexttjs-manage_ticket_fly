"use client";

import { useBookingTypes } from "@/hooks/commerce/booking-type";
import { useCurrencies } from "@/hooks/location/currency";
import { useMediaAssets } from "@/hooks/catalog/media-asset";

import { DEFAULT_LIMIT, DEFAULT_PAGE } from "@/config/react-query.config";

// ======================================================
// CREATE FORM DATA
// ======================================================

export const usePackageCreateFormData = (enabled = true) => {
  const bookingTypeQuery = useBookingTypes(
    DEFAULT_PAGE,
    DEFAULT_LIMIT,
    enabled,
  );

  const currencyQuery = useCurrencies(DEFAULT_PAGE, DEFAULT_LIMIT, enabled);

  const mediaAssetQuery = useMediaAssets(DEFAULT_PAGE, DEFAULT_LIMIT, enabled);

  return {
    // ==================================================
    // DATA
    // ==================================================

    data:
      bookingTypeQuery.data && currencyQuery.data && mediaAssetQuery.data
        ? {
            bookingTypeData: bookingTypeQuery.data,

            currencyData: currencyQuery.data,

            mediaAssetData: mediaAssetQuery.data,
          }
        : undefined,

    // ==================================================
    // LOADING
    // ==================================================

    isLoading:
      bookingTypeQuery.isLoading ||
      currencyQuery.isLoading ||
      mediaAssetQuery.isLoading,

    isFetching:
      bookingTypeQuery.isFetching ||
      currencyQuery.isFetching ||
      mediaAssetQuery.isFetching,

    // ==================================================
    // ERROR
    // ==================================================

    isError:
      bookingTypeQuery.isError ||
      currencyQuery.isError ||
      mediaAssetQuery.isError,

    errors: {
      bookingType: bookingTypeQuery.error as Error | null,

      currency: currencyQuery.error as Error | null,

      mediaAsset: mediaAssetQuery.error as Error | null,
    },

    // ==================================================
    // REFETCH
    // ==================================================

    refetch: async () => {
      await Promise.all([
        bookingTypeQuery.refetch(),
        currencyQuery.refetch(),
        mediaAssetQuery.refetch(),
      ]);
    },
  };
};
