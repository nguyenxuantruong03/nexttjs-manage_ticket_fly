"use client";

import { PromotionRuleService } from "@/services/commerce/promotion-rule/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const promotionRuleQueryKeys = {
  all: ["promotion-rule"] as const,
  list: () => [...promotionRuleQueryKeys.all, "list"] as const,
  detail: (id: string) =>
    [...promotionRuleQueryKeys.all, "detail", id] as const,
};

export function usePromotionRules(enabled = true) {
  return useQuery({
    queryKey: promotionRuleQueryKeys.list(),
    queryFn: () => PromotionRuleService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function usePromotionRule(id: string, enabled = true) {
  return useQuery({
    queryKey: promotionRuleQueryKeys.detail(id),
    queryFn: () => PromotionRuleService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

export function useCreatePromotionRule() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof PromotionRuleService.create>[0]) =>
      PromotionRuleService.create(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: promotionRuleQueryKeys.list(),
      });
    },
  });
}

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
          queryKey: promotionRuleQueryKeys.list(),
        }),
        queryClient.invalidateQueries({
          queryKey: promotionRuleQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

export function useDeletePromotionRule() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => PromotionRuleService.delete(id),
    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: promotionRuleQueryKeys.list(),
        }),
        queryClient.removeQueries({
          queryKey: promotionRuleQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
