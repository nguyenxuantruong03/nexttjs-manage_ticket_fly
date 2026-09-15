"use client";

import { usePackage } from "@/hooks/commerce/package";
import { useBookingTypes } from "@/hooks/commerce/booking-type";
import { useCurrencies } from "@/hooks/location/currency";
import { useMediaAssets } from "@/hooks/catalog/media-asset";

import { DEFAULT_LIMIT, DEFAULT_PAGE } from "@/config/react-query.config";

// ======================================================
// UPDATE FORM DATA
// ======================================================

export const usePackageUpdateFormData = (packageId: string, enabled = true) => {
  const packageQuery = usePackage(packageId, enabled);

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
      packageQuery.data &&
      bookingTypeQuery.data &&
      currencyQuery.data &&
      mediaAssetQuery.data
        ? {
            packageData: packageQuery.data,

            bookingTypeData: bookingTypeQuery.data,

            currencyData: currencyQuery.data,

            mediaAssetData: mediaAssetQuery.data,
          }
        : undefined,

    // ==================================================
    // LOADING
    // ==================================================

    isLoading:
      packageQuery.isLoading ||
      bookingTypeQuery.isLoading ||
      currencyQuery.isLoading ||
      mediaAssetQuery.isLoading,

    isFetching:
      packageQuery.isFetching ||
      bookingTypeQuery.isFetching ||
      currencyQuery.isFetching ||
      mediaAssetQuery.isFetching,

    // ==================================================
    // ERROR
    // ==================================================

    isError:
      packageQuery.isError ||
      bookingTypeQuery.isError ||
      currencyQuery.isError ||
      mediaAssetQuery.isError,

    errors: {
      package: packageQuery.error as Error | null,

      bookingType: bookingTypeQuery.error as Error | null,

      currency: currencyQuery.error as Error | null,

      mediaAsset: mediaAssetQuery.error as Error | null,
    },

    // ==================================================
    // REFETCH
    // ==================================================

    refetch: async () => {
      await Promise.all([
        packageQuery.refetch(),
        bookingTypeQuery.refetch(),
        currencyQuery.refetch(),
        mediaAssetQuery.refetch(),
      ]);
    },
  };
};
