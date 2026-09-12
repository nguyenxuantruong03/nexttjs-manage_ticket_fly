"use client";

import { TaxRuleService } from "@/services/commerce/compliance-legal/tax-rule/client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ======================================================
// Query Keys
// ======================================================

export const taxRuleQueryKeys = {
  all: ["tax-rule"] as const,

  list: () => [...taxRuleQueryKeys.all, "list"] as const,

  detail: (id: string) =>
    [...taxRuleQueryKeys.all, "detail", id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useTaxRules(enabled = true) {
  return useQuery({
    queryKey: taxRuleQueryKeys.list(),

    queryFn: () => TaxRuleService.getMany(),

    enabled,

    staleTime: 1000 * 60 * 5,
  });
}

export function useTaxRule(id: string, enabled = true) {
  return useQuery({
    queryKey: taxRuleQueryKeys.detail(id),

    queryFn: () => TaxRuleService.getOne(id),

    enabled: enabled && !!id,

    staleTime: 1000 * 60 * 5,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateTaxRule() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (
      data: Parameters<typeof TaxRuleService.create>[0],
    ) => TaxRuleService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: taxRuleQueryKeys.list(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateTaxRule() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof TaxRuleService.update>[1];
    }) => TaxRuleService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: taxRuleQueryKeys.list(),
        }),

        queryClient.invalidateQueries({
          queryKey: taxRuleQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteTaxRule() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => TaxRuleService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: taxRuleQueryKeys.list(),
        }),

        queryClient.removeQueries({
          queryKey: taxRuleQueryKeys.detail(id),
        }),
      ]);
    },
  });
}