"use client"
import { CurrencyService } from "@/services/cities/currencies/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["currency"] as const;

export function useCurrencies() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => CurrencyService.getMany(),
  });
}

export function useCurrency(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => CurrencyService.getOne(id),
    enabled: !!id,
  });
}

export function useCreateCurrency() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: CurrencyService.create,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
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

    onSuccess(_, variables) {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });

      queryClient.invalidateQueries({
        queryKey: [...QUERY_KEY, variables.id],
      });
    },
  });
}

export function useDeleteCurrency() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: CurrencyService.delete,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}
