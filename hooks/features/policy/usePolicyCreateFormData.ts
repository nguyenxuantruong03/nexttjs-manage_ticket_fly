"use client";

import { useBookingTypes } from "@/hooks/commerce/booking-type";
import { usePolicyTypes } from "@/hooks/features/policy-type";

export const usePolicyCreateFormData = (enabled = true) => {
  const bookingTypeQuery = useBookingTypes(enabled);
  const policyTypeQuery = usePolicyTypes(enabled);

  return {
    data:
      bookingTypeQuery.data && policyTypeQuery.data
        ? {
            bookingTypeData: bookingTypeQuery.data,
            policyTypeData: policyTypeQuery.data,
          }
        : undefined,
    isLoading: bookingTypeQuery.isLoading || policyTypeQuery.isLoading,
    isFetching: bookingTypeQuery.isFetching || policyTypeQuery.isFetching,
    isError: bookingTypeQuery.isError || policyTypeQuery.isError,
    errors: {
      bookingType: bookingTypeQuery.error as Error | null,
      policyType: policyTypeQuery.error as Error | null,
    },
    refetch: async () => {
      await Promise.all([
        bookingTypeQuery.refetch(),
        policyTypeQuery.refetch(),
      ]);
    },
  };
};
