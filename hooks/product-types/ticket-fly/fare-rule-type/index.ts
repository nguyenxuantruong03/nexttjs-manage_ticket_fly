"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { FlyFareRuleTypeService } from "@/services/product-types/ticket-fly/fare-rule-type/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// Query Keys
// ======================================================

export const flyFareRuleTypeQueryKeys = {
  all: ["fly-fare-rule-type"] as const,

  lists: () => [...flyFareRuleTypeQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...flyFareRuleTypeQueryKeys.lists(), { page, limit }] as const,

  details: () => [...flyFareRuleTypeQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...flyFareRuleTypeQueryKeys.details(), id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useFlyFareRuleTypes(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: flyFareRuleTypeQueryKeys.list(page, limit),
    queryFn: () =>
      FlyFareRuleTypeService.getMany({
        page,
        limit,
      }),
    enabled,
    staleTime: DEFAULT_QUERY_STALE_TIME,
    placeholderData: keepPreviousData,
  });
}

export function useFlyFareRuleType(id: string, enabled = true) {
  return useQuery({
    queryKey: flyFareRuleTypeQueryKeys.detail(id),
    queryFn: () => FlyFareRuleTypeService.getOne(id),
    enabled: enabled && Boolean(id),
    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateFlyFareRuleType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof FlyFareRuleTypeService.create>[0]) =>
      FlyFareRuleTypeService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: flyFareRuleTypeQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateFlyFareRuleType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof FlyFareRuleTypeService.update>[1];
    }) => FlyFareRuleTypeService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: flyFareRuleTypeQueryKeys.lists(),
        }),
        queryClient.invalidateQueries({
          queryKey: flyFareRuleTypeQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteFlyFareRuleType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => FlyFareRuleTypeService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: flyFareRuleTypeQueryKeys.lists(),
        }),
        queryClient.removeQueries({
          queryKey: flyFareRuleTypeQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
