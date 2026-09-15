"use client";

import { usePolicy } from "@/hooks/features/policy";
import { usePolicyTypes } from "@/hooks/features/policy-type";
import { useBookingTypes } from "@/hooks/commerce/booking-type";

import { DEFAULT_LIMIT, DEFAULT_PAGE } from "@/config/react-query.config";

// ======================================================
// UPDATE FORM DATA
// ======================================================

export const usePolicyUpdateFormData = (policyId: string, enabled = true) => {
  const policyQuery = usePolicy(policyId, enabled);

  const policyTypeQuery = usePolicyTypes(DEFAULT_PAGE, DEFAULT_LIMIT, enabled);

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
      policyQuery.data && policyTypeQuery.data && bookingTypeQuery.data
        ? {
            policyData: policyQuery.data,

            policyTypeData: policyTypeQuery.data,

            bookingTypeData: bookingTypeQuery.data,
          }
        : undefined,

    // ==================================================
    // LOADING
    // ==================================================

    isLoading:
      policyQuery.isLoading ||
      policyTypeQuery.isLoading ||
      bookingTypeQuery.isLoading,

    isFetching:
      policyQuery.isFetching ||
      policyTypeQuery.isFetching ||
      bookingTypeQuery.isFetching,

    // ==================================================
    // ERROR
    // ==================================================

    isError:
      policyQuery.isError ||
      policyTypeQuery.isError ||
      bookingTypeQuery.isError,

    errors: {
      policy: policyQuery.error as Error | null,

      policyType: policyTypeQuery.error as Error | null,

      bookingType: bookingTypeQuery.error as Error | null,
    },

    // ==================================================
    // REFETCH
    // ==================================================

    refetch: async () => {
      await Promise.all([
        policyQuery.refetch(),
        policyTypeQuery.refetch(),
        bookingTypeQuery.refetch(),
      ]);
    },
  };
};
