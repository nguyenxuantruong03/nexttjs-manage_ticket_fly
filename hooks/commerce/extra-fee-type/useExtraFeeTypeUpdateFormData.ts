"use client";

import { useExtraFeeType } from "@/hooks/commerce/extra-fee-type";
import { useBookingTypes } from "@/hooks/commerce/booking-type";

export const useExtraFeeTypeUpdateFormData = (
  extraFeeTypeId: string,
  enabled = true,
) => {
  const extraFeeTypeQuery = useExtraFeeType(extraFeeTypeId, enabled);
  const bookingTypeQuery = useBookingTypes(enabled);

  return {
    data:
      extraFeeTypeQuery.data && bookingTypeQuery.data
        ? {
            extraFeeTypeData: extraFeeTypeQuery.data,
            bookingTypes: bookingTypeQuery.data,
          }
        : undefined,

    isLoading: extraFeeTypeQuery.isLoading || bookingTypeQuery.isLoading,
    isFetching: extraFeeTypeQuery.isFetching || bookingTypeQuery.isFetching,

    isError: extraFeeTypeQuery.isError || bookingTypeQuery.isError,
    errors: {
      extraFeeType: extraFeeTypeQuery.error as Error | null,
      bookingType: bookingTypeQuery.error as Error | null,
    },

    refetch: async () => {
      await Promise.all([
        extraFeeTypeQuery.refetch(),
        bookingTypeQuery.refetch(),
      ]);
    },
  };
};
