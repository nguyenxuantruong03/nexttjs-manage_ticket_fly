"use client";

import { useQuery } from "@tanstack/react-query";

import { CurrencyService } from "@/services/location/currency/client";

export const useCurrencyUpdateFormData = (
  currencyId: string,
  enabled = true,
) => {
  return useQuery({
    queryKey: ["currency-update-form-data", currencyId],
    enabled: enabled && !!currencyId,
    staleTime: 1000 * 60 * 5,
    queryFn: async () => {
      const [initialData] = await Promise.all([
        CurrencyService.getOne(currencyId),
      ]);

      return {
        initialData,
      };
    },
  });
};
