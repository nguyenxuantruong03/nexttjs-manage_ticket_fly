"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { YachtConditionService } from "@/services/product-types/yacht/condition/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// Query Keys
// ======================================================

export const yachtConditionQueryKeys = {
  all: ["yacht-condition"] as const,

  lists: () => [...yachtConditionQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...yachtConditionQueryKeys.lists(), { page, limit }] as const,

  details: () => [...yachtConditionQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...yachtConditionQueryKeys.details(), id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useYachtConditions(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: yachtConditionQueryKeys.list(page, limit),
    queryFn: () =>
      YachtConditionService.getMany({
        page,
        limit,
      }),
    enabled,
    staleTime: DEFAULT_QUERY_STALE_TIME,
    placeholderData: keepPreviousData,
  });
}

export function useYachtCondition(id: string, enabled = true) {
  return useQuery({
    queryKey: yachtConditionQueryKeys.detail(id),
    queryFn: () => YachtConditionService.getOne(id),
    enabled: enabled && Boolean(id),
    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateYachtCondition() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof YachtConditionService.create>[0]) =>
      YachtConditionService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: yachtConditionQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateYachtCondition() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof YachtConditionService.update>[1];
    }) => YachtConditionService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: yachtConditionQueryKeys.lists(),
        }),
        queryClient.invalidateQueries({
          queryKey: yachtConditionQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteYachtCondition() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => YachtConditionService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: yachtConditionQueryKeys.lists(),
        }),
        queryClient.removeQueries({
          queryKey: yachtConditionQueryKeys.detail(id),
        }),
      ]);
    },
  });
}