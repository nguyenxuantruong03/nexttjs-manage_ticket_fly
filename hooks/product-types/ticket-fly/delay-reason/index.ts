"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { FlyDelayReasonService } from "@/services/product-types/ticket-fly/delay-reason/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// Query Keys
// ======================================================

export const flyDelayReasonQueryKeys = {
  all: ["fly-delay-reason"] as const,

  lists: () => [...flyDelayReasonQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...flyDelayReasonQueryKeys.lists(), { page, limit }] as const,

  details: () => [...flyDelayReasonQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...flyDelayReasonQueryKeys.details(), id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useFlyDelayReasons(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: flyDelayReasonQueryKeys.list(page, limit),
    queryFn: () =>
      FlyDelayReasonService.getMany({
        page,
        limit,
      }),
    enabled,
    staleTime: DEFAULT_QUERY_STALE_TIME,
    placeholderData: keepPreviousData,
  });
}

export function useFlyDelayReason(id: string, enabled = true) {
  return useQuery({
    queryKey: flyDelayReasonQueryKeys.detail(id),
    queryFn: () => FlyDelayReasonService.getOne(id),
    enabled: enabled && Boolean(id),
    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateFlyDelayReason() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof FlyDelayReasonService.create>[0]) =>
      FlyDelayReasonService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: flyDelayReasonQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateFlyDelayReason() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof FlyDelayReasonService.update>[1];
    }) => FlyDelayReasonService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: flyDelayReasonQueryKeys.lists(),
        }),
        queryClient.invalidateQueries({
          queryKey: flyDelayReasonQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteFlyDelayReason() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => FlyDelayReasonService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: flyDelayReasonQueryKeys.lists(),
        }),
        queryClient.removeQueries({
          queryKey: flyDelayReasonQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
