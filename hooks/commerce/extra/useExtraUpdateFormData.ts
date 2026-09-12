"use client";

import { useExtra } from "@/hooks/commerce/extra";

import { useBookingTypes } from "@/hooks/commerce/booking-type";

import { useExtraTypes } from "@/hooks/commerce/extra-type";

import { useCurrencies } from "@/hooks/location/currency";

import { useMediaAssets } from "@/hooks/catalog/media-asset";

export const useExtraUpdateFormData = (
  extraId: string,
  enabled = true,
) => {
  const extraQuery = useExtra(extraId, enabled);

  const bookingTypeQuery = useBookingTypes(enabled);

  const extraTypeQuery = useExtraTypes(enabled);

  const currencyQuery = useCurrencies(enabled);

  const mediaAssetQuery = useMediaAssets(enabled);

  return {
    data:
      extraQuery.data &&
      bookingTypeQuery.data &&
      extraTypeQuery.data &&
      currencyQuery.data &&
      mediaAssetQuery.data
        ? {
            extraData: extraQuery.data,
            bookingTypeData: bookingTypeQuery.data,
            extraTypeData: extraTypeQuery.data,
            currencyData: currencyQuery.data,
            mediaAssetData: mediaAssetQuery.data,
          }
        : undefined,

    isLoading:
      extraQuery.isLoading ||
      bookingTypeQuery.isLoading ||
      extraTypeQuery.isLoading ||
      currencyQuery.isLoading ||
      mediaAssetQuery.isLoading,

    isFetching:
      extraQuery.isFetching ||
      bookingTypeQuery.isFetching ||
      extraTypeQuery.isFetching ||
      currencyQuery.isFetching ||
      mediaAssetQuery.isFetching,

    isError:
      extraQuery.isError ||
      bookingTypeQuery.isError ||
      extraTypeQuery.isError ||
      currencyQuery.isError ||
      mediaAssetQuery.isError,

    errors: {
      extra: extraQuery.error as Error | null,
      bookingType: bookingTypeQuery.error as Error | null,
      extraType: extraTypeQuery.error as Error | null,
      currency: currencyQuery.error as Error | null,
      mediaAsset: mediaAssetQuery.error as Error | null,
    },

    refetch: async () => {
      await Promise.all([
        extraQuery.refetch(),
        bookingTypeQuery.refetch(),
        extraTypeQuery.refetch(),
        currencyQuery.refetch(),
        mediaAssetQuery.refetch(),
      ]);
    },
  };
};