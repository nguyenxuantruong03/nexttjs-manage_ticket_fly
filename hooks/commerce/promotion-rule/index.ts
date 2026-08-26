"use client";

import { PromotionRuleService } from "@/services/commerce/promotion-rule/client";

import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

const QUERY_KEY = ["promotion-rule"] as const;

export function usePromotionRules() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => PromotionRuleService.getMany(),
  });
}

export function usePromotionRule(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => PromotionRuleService.getOne(id),
    enabled: !!id,
  });
}

export function useCreatePromotionRule() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: PromotionRuleService.create,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
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

export function useDeletePromotionRule() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: PromotionRuleService.delete,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}