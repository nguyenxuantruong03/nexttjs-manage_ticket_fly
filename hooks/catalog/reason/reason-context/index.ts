"use client";

import { ReasonContextService } from "@/services/catalog/reason/reason-context/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ======================================================
// Query Keys
// ======================================================

export const reasonContextQueryKeys = {
  all: ["reason-context"] as const,

  list: () => [...reasonContextQueryKeys.all, "list"] as const,

  detail: (id: string) =>
    [...reasonContextQueryKeys.all, "detail", id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useReasonContexts(enabled = true) {
  return useQuery({
    queryKey: reasonContextQueryKeys.list(),

    queryFn: () => ReasonContextService.getMany(),

    enabled,

    staleTime: 1000 * 60 * 5,
  });
}

export function useReasonContext(id: string, enabled = true) {
  return useQuery({
    queryKey: reasonContextQueryKeys.detail(id),

    queryFn: () => ReasonContextService.getOne(id),

    enabled: enabled && !!id,

    staleTime: 1000 * 60 * 5,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateReasonContext() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof ReasonContextService.create>[0]) =>
      ReasonContextService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: reasonContextQueryKeys.list(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateReasonContext() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof ReasonContextService.update>[1];
    }) => ReasonContextService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: reasonContextQueryKeys.list(),
        }),

        queryClient.invalidateQueries({
          queryKey: reasonContextQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteReasonContext() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => ReasonContextService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: reasonContextQueryKeys.list(),
        }),

        queryClient.removeQueries({
          queryKey: reasonContextQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
