"use client";

import { PriceRuleTypeService } from "@/services/commerce/price-rule-type/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ======================================================
// Query Keys
// ======================================================

export const priceRuleTypeQueryKeys = {
  all: ["price-rule-type"] as const,
  list: () => [...priceRuleTypeQueryKeys.all, "list"] as const,
  detail: (id: string) =>
    [...priceRuleTypeQueryKeys.all, "detail", id] as const,
};

// ======================================================
// Queries
// ======================================================

export function usePriceRuleTypes(enabled = true) {
  return useQuery({
    queryKey: priceRuleTypeQueryKeys.list(),
    queryFn: () => PriceRuleTypeService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function usePriceRuleType(id: string, enabled = true) {
  return useQuery({
    queryKey: priceRuleTypeQueryKeys.detail(id),
    queryFn: () => PriceRuleTypeService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreatePriceRuleType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof PriceRuleTypeService.create>[0]) =>
      PriceRuleTypeService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: priceRuleTypeQueryKeys.list(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdatePriceRuleType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof PriceRuleTypeService.update>[1];
    }) => PriceRuleTypeService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: priceRuleTypeQueryKeys.list(),
        }),
        queryClient.invalidateQueries({
          queryKey: priceRuleTypeQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeletePriceRuleType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => PriceRuleTypeService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: priceRuleTypeQueryKeys.list(),
        }),
        queryClient.removeQueries({
          queryKey: priceRuleTypeQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
