"use client";

import { PromotionService } from "@/services/commerce/promotion/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const promotionQueryKeys = {
  all: ["promotion"] as const,
  list: () => [...promotionQueryKeys.all, "list"] as const,
  detail: (id: string) => [...promotionQueryKeys.all, "detail", id] as const,
};

export function usePromotions(enabled = true) {
  return useQuery({
    queryKey: promotionQueryKeys.list(),
    queryFn: () => PromotionService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function usePromotion(id: string, enabled = true) {
  return useQuery({
    queryKey: promotionQueryKeys.detail(id),
    queryFn: () => PromotionService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

export function useCreatePromotion() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof PromotionService.create>[0]) =>
      PromotionService.create(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: promotionQueryKeys.list(),
      });
    },
  });
}

export function useUpdatePromotion() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof PromotionService.update>[1];
    }) => PromotionService.update(id, data),
    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: promotionQueryKeys.list() }),
        queryClient.invalidateQueries({
          queryKey: promotionQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

export function useDeletePromotion() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => PromotionService.delete(id),
    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: promotionQueryKeys.list() }),
        queryClient.removeQueries({ queryKey: promotionQueryKeys.detail(id) }),
      ]);
    },
  });
}
