"use client";

import { ExtraService } from "@/services/commerce/extra/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ======================================================
// Query Keys
// ======================================================

export const extraQueryKeys = {
  all: ["extra"] as const,
  list: () => [...extraQueryKeys.all, "list"] as const,
  detail: (id: string) => [...extraQueryKeys.all, "detail", id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useExtras(enabled = true) {
  return useQuery({
    queryKey: extraQueryKeys.list(),
    queryFn: () => ExtraService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useExtra(id: string, enabled = true) {
  return useQuery({
    queryKey: extraQueryKeys.detail(id),
    queryFn: () => ExtraService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateExtra() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof ExtraService.create>[0]) =>
      ExtraService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: extraQueryKeys.list(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateExtra() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof ExtraService.update>[1];
    }) => ExtraService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: extraQueryKeys.list() }),
        queryClient.invalidateQueries({
          queryKey: extraQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteExtra() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => ExtraService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: extraQueryKeys.list() }),
        queryClient.removeQueries({ queryKey: extraQueryKeys.detail(id) }),
      ]);
    },
  });
}
