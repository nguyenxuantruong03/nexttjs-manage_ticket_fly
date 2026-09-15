"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { PriceRuleTypeService } from "@/services/commerce/price-rule-type/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// QUERY KEYS
// ======================================================

export const priceRuleTypeQueryKeys = {
  all: ["price-rule-type"] as const,

  lists: () => [...priceRuleTypeQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...priceRuleTypeQueryKeys.lists(), { page, limit }] as const,

  details: () => [...priceRuleTypeQueryKeys.all, "detail"] as const,

  detail: (id: string) =>
    [...priceRuleTypeQueryKeys.details(), id] as const,
};

// ======================================================
// FIND ALL
// ======================================================

export function usePriceRuleTypes(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: priceRuleTypeQueryKeys.list(page, limit),

    queryFn: () =>
      PriceRuleTypeService.getMany({
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

export function usePriceRuleType(
  id: string,
  enabled = true,
) {
  return useQuery({
    queryKey: priceRuleTypeQueryKeys.detail(id),

    queryFn: () =>
      PriceRuleTypeService.getOne(id),

    enabled: enabled && Boolean(id),

    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// CREATE
// ======================================================

export function useCreatePriceRuleType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (
      data: Parameters<
        typeof PriceRuleTypeService.create
      >[0]
    ) => PriceRuleTypeService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: priceRuleTypeQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// UPDATE
// ======================================================

export function useUpdatePriceRuleType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<
        typeof PriceRuleTypeService.update
      >[1];
    }) => PriceRuleTypeService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: priceRuleTypeQueryKeys.lists(),
        }),

        queryClient.invalidateQueries({
          queryKey: priceRuleTypeQueryKeys.detail(
            variables.id,
          ),
        }),
      ]);
    },
  });
}

// ======================================================
// DELETE
// ======================================================

export function useDeletePriceRuleType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) =>
      PriceRuleTypeService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: priceRuleTypeQueryKeys.lists(),
        }),

        queryClient.removeQueries({
          queryKey: priceRuleTypeQueryKeys.detail(id),
        }),
      ]);
    },
  });
}