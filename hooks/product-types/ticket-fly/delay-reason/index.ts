"use client";

import { FlyDelayReasonService } from "@/services/product-types/ticket-fly/delay-reason/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ======================================================
// Query Keys
// ======================================================

export const flyDelayReasonQueryKeys = {
  all: ["fly-delay-reason"] as const,
  list: () => [...flyDelayReasonQueryKeys.all, "list"] as const,
  detail: (id: string) =>
    [...flyDelayReasonQueryKeys.all, "detail", id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useFlyDelayReasons(enabled = true) {
  return useQuery({
    queryKey: flyDelayReasonQueryKeys.list(),
    queryFn: () => FlyDelayReasonService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useFlyDelayReason(id: string, enabled = true) {
  return useQuery({
    queryKey: flyDelayReasonQueryKeys.detail(id),
    queryFn: () => FlyDelayReasonService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
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
        queryKey: flyDelayReasonQueryKeys.list(),
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
          queryKey: flyDelayReasonQueryKeys.list(),
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
          queryKey: flyDelayReasonQueryKeys.list(),
        }),
        queryClient.removeQueries({
          queryKey: flyDelayReasonQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
