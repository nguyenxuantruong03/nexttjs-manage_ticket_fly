"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { TaxRuleService } from "@/services/commerce/compliance-legal/tax-rule/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// QUERY KEYS
// ======================================================

export const taxRuleQueryKeys = {
  all: ["tax-rule"] as const,

  lists: () => [...taxRuleQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...taxRuleQueryKeys.lists(), { page, limit }] as const,

  details: () => [...taxRuleQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...taxRuleQueryKeys.details(), id] as const,
};

// ======================================================
// FIND ALL
// ======================================================

export function useTaxRules(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: taxRuleQueryKeys.list(page, limit),

    queryFn: () =>
      TaxRuleService.getMany({
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

export function useTaxRule(id: string, enabled = true) {
  return useQuery({
    queryKey: taxRuleQueryKeys.detail(id),

    queryFn: () => TaxRuleService.getOne(id),

    enabled: enabled && Boolean(id),

    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// CREATE
// ======================================================

export function useCreateTaxRule() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof TaxRuleService.create>[0]) =>
      TaxRuleService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: taxRuleQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// UPDATE
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
          queryKey: taxRuleQueryKeys.lists(),
        }),

        queryClient.invalidateQueries({
          queryKey: taxRuleQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// DELETE
// ======================================================

export function useDeleteTaxRule() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => TaxRuleService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: taxRuleQueryKeys.lists(),
        }),

        queryClient.removeQueries({
          queryKey: taxRuleQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
