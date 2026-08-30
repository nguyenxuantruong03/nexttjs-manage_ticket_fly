"use client";

import { CurrencyService } from "@/services/location/currency/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const currencyQueryKeys = {
  all: ["currency"] as const,
  list: () => [...currencyQueryKeys.all, "list"] as const,
  detail: (id: string) => [...currencyQueryKeys.all, "detail", id] as const,
};

export function useCurrencies(enabled = true) {
  return useQuery({
    queryKey: currencyQueryKeys.list(),
    queryFn: () => CurrencyService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useCurrency(id: string, enabled = true) {
  return useQuery({
    queryKey: currencyQueryKeys.detail(id),
    queryFn: () => CurrencyService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

export function useCreateCurrency() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof CurrencyService.create>[0]) =>
      CurrencyService.create(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: currencyQueryKeys.list(),
      });
    },
  });
}

export function useUpdateCurrency() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof CurrencyService.update>[1];
    }) => CurrencyService.update(id, data),
    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: currencyQueryKeys.list() }),
        queryClient.invalidateQueries({
          queryKey: currencyQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

export function useDeleteCurrency() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => CurrencyService.delete(id),
    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: currencyQueryKeys.list() }),
        queryClient.removeQueries({ queryKey: currencyQueryKeys.detail(id) }),
      ]);
    },
  });
}
