"use client";

import { usePolicyType } from "@/hooks/features/policy-type";
import { useBookingTypes } from "@/hooks/commerce/booking-type";

export const usePolicyTypeUpdateFormData = (
  policyTypeId: string,
  enabled = true,
) => {
  const policyTypeQuery = usePolicyType(policyTypeId, enabled);
  const bookingTypeQuery = useBookingTypes(enabled);

  return {
    data:
      policyTypeQuery.data && bookingTypeQuery.data
        ? {
            policyTypeData: policyTypeQuery.data,
            bookingTypeData: bookingTypeQuery.data,
          }
        : undefined,
    isLoading: policyTypeQuery.isLoading || bookingTypeQuery.isLoading,
    isFetching: policyTypeQuery.isFetching || bookingTypeQuery.isFetching,
    isError: policyTypeQuery.isError || bookingTypeQuery.isError,
    errors: {
      policyType: policyTypeQuery.error as Error | null,
      bookingType: bookingTypeQuery.error as Error | null,
    },
    refetch: async () => {
      await Promise.all([
        policyTypeQuery.refetch(),
        bookingTypeQuery.refetch(),
      ]);
    },
  };
};
