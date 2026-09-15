"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { PromotionRuleService } from "@/services/commerce/promotion-rule/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// QUERY KEYS
// ======================================================

export const promotionRuleQueryKeys = {
  all: ["promotion-rule"] as const,

  lists: () => [...promotionRuleQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...promotionRuleQueryKeys.lists(), { page, limit }] as const,

  details: () => [...promotionRuleQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...promotionRuleQueryKeys.details(), id] as const,
};

// ======================================================
// FIND ALL
// ======================================================

export function usePromotionRules(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: promotionRuleQueryKeys.list(page, limit),

    queryFn: () =>
      PromotionRuleService.getMany({
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

export function usePromotionRule(id: string, enabled = true) {
  return useQuery({
    queryKey: promotionRuleQueryKeys.detail(id),

    queryFn: () => PromotionRuleService.getOne(id),

    enabled: enabled && Boolean(id),

    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// CREATE
// ======================================================

export function useCreatePromotionRule() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof PromotionRuleService.create>[0]) =>
      PromotionRuleService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: promotionRuleQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// UPDATE
// ======================================================

export function useUpdatePromotionRule() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof PromotionRuleService.update>[1];
    }) => PromotionRuleService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: promotionRuleQueryKeys.lists(),
        }),

        queryClient.invalidateQueries({
          queryKey: promotionRuleQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// DELETE
// ======================================================

export function useDeletePromotionRule() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => PromotionRuleService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: promotionRuleQueryKeys.lists(),
        }),

        queryClient.removeQueries({
          queryKey: promotionRuleQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
