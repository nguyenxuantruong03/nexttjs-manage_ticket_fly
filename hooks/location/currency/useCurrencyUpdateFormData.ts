"use client";

import { useCurrency } from "@/hooks/location/currency";

// ======================================================
// UPDATE FORM DATA
// ======================================================

export const useCurrencyUpdateFormData = (
  currencyId: string,
  enabled = true,
) => {
  const currencyQuery = useCurrency(currencyId, enabled);

  return {
    // ==================================================
    // DATA
    // ==================================================

    data: currencyQuery.data
      ? {
          initialData: currencyQuery.data,
        }
      : undefined,

    // ==================================================
    // LOADING
    // ==================================================

    isLoading: currencyQuery.isLoading,

    isFetching: currencyQuery.isFetching,

    // ==================================================
    // ERROR
    // ==================================================

    isError: currencyQuery.isError,

    errors: {
      currency: currencyQuery.error as Error | null,
    },

    // ==================================================
    // REFETCH
    // ==================================================

    refetch: currencyQuery.refetch,
  };
};
