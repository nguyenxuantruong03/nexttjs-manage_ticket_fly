"use client";

import { usePolicy } from "@/hooks/features/policy";
import { usePolicyTypes } from "@/hooks/features/policy-type";
import { useBookingTypes } from "@/hooks/commerce/booking-type";

export const usePolicyUpdateFormData = (policyId: string, enabled = true) => {
  const policyQuery = usePolicy(policyId, enabled);
  const policyTypeQuery = usePolicyTypes(enabled);
  const bookingTypeQuery = useBookingTypes(enabled);

  return {
    data:
      policyQuery.data && policyTypeQuery.data && bookingTypeQuery.data
        ? {
            policyData: policyQuery.data,
            policyTypeData: policyTypeQuery.data,
            bookingTypeData: bookingTypeQuery.data,
          }
        : undefined,
    isLoading:
      policyQuery.isLoading ||
      policyTypeQuery.isLoading ||
      bookingTypeQuery.isLoading,
    isFetching:
      policyQuery.isFetching ||
      policyTypeQuery.isFetching ||
      bookingTypeQuery.isFetching,
    isError:
      policyQuery.isError ||
      policyTypeQuery.isError ||
      bookingTypeQuery.isError,
    errors: {
      policy: policyQuery.error as Error | null,
      policyType: policyTypeQuery.error as Error | null,
      bookingType: bookingTypeQuery.error as Error | null,
    },
    refetch: async () => {
      await Promise.all([
        policyQuery.refetch(),
        policyTypeQuery.refetch(),
        bookingTypeQuery.refetch(),
      ]);
    },
  };
};
