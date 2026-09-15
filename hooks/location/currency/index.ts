"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { CurrencyService } from "@/services/location/currency/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// QUERY KEYS
// ======================================================

export const currencyQueryKeys = {
  all: ["currency"] as const,

  lists: () => [...currencyQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...currencyQueryKeys.lists(), { page, limit }] as const,

  details: () => [...currencyQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...currencyQueryKeys.details(), id] as const,
};

// ======================================================
// FIND ALL
// ======================================================

export function useCurrencies(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: currencyQueryKeys.list(page, limit),

    queryFn: () =>
      CurrencyService.getMany({
        page,
        limit,
      }),

    enabled,

    staleTime: DEFAULT_QUERY_STALE_TIME,

    placeholderData: keepPreviousData,
  });
}

// ======================================================
// FIND ONE
// ======================================================

export function useCurrency(id: string, enabled = true) {
  return useQuery({
    queryKey: currencyQueryKeys.detail(id),

    queryFn: () => CurrencyService.getOne(id),

    enabled: enabled && Boolean(id),

    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// CREATE
// ======================================================

export function useCreateCurrency() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof CurrencyService.create>[0]) =>
      CurrencyService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: currencyQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// UPDATE
// ======================================================

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
        queryClient.invalidateQueries({
          queryKey: currencyQueryKeys.lists(),
        }),

        queryClient.invalidateQueries({
          queryKey: currencyQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// DELETE
// ======================================================

export function useDeleteCurrency() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => CurrencyService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: currencyQueryKeys.lists(),
        }),

        queryClient.removeQueries({
          queryKey: currencyQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
