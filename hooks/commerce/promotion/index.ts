"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { PromotionService } from "@/services/commerce/promotion/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// QUERY KEYS
// ======================================================

export const promotionQueryKeys = {
  all: ["promotion"] as const,

  lists: () => [...promotionQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...promotionQueryKeys.lists(), { page, limit }] as const,

  details: () => [...promotionQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...promotionQueryKeys.details(), id] as const,
};

// ======================================================
// FIND ALL
// ======================================================

export function usePromotions(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: promotionQueryKeys.list(page, limit),

    queryFn: () =>
      PromotionService.getMany({
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

export function usePromotion(id: string, enabled = true) {
  return useQuery({
    queryKey: promotionQueryKeys.detail(id),

    queryFn: () => PromotionService.getOne(id),

    enabled: enabled && Boolean(id),

    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// CREATE
// ======================================================

export function useCreatePromotion() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof PromotionService.create>[0]) =>
      PromotionService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: promotionQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// UPDATE
// ======================================================

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
        queryClient.invalidateQueries({
          queryKey: promotionQueryKeys.lists(),
        }),

        queryClient.invalidateQueries({
          queryKey: promotionQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// DELETE
// ======================================================

export function useDeletePromotion() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => PromotionService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: promotionQueryKeys.lists(),
        }),

        queryClient.removeQueries({
          queryKey: promotionQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
