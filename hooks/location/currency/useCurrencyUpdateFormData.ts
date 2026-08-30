"use client";

import { useCurrency } from "@/hooks/location/currency";

export const useCurrencyUpdateFormData = (
  currencyId: string,
  enabled = true,
) => {
  const currencyQuery = useCurrency(currencyId, enabled);

  return {
    data: currencyQuery.data ? { initialData: currencyQuery.data } : undefined,

    isLoading: currencyQuery.isLoading,
    isFetching: currencyQuery.isFetching,

    isError: currencyQuery.isError,
    errors: {
      currency: currencyQuery.error as Error | null,
    },

    refetch: currencyQuery.refetch,
  };
};
