"use client";

import { ReasonCodeService } from "@/services/catalog/reason/reason-code/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ======================================================
// Query Keys
// ======================================================

export const reasonCodeQueryKeys = {
  all: ["reason-code"] as const,

  list: () => [...reasonCodeQueryKeys.all, "list"] as const,

  detail: (id: string) => [...reasonCodeQueryKeys.all, "detail", id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useReasonCodes(enabled = true) {
  return useQuery({
    queryKey: reasonCodeQueryKeys.list(),

    queryFn: () => ReasonCodeService.getMany(),

    enabled,

    staleTime: 1000 * 60 * 5,
  });
}

export function useReasonCode(id: string, enabled = true) {
  return useQuery({
    queryKey: reasonCodeQueryKeys.detail(id),

    queryFn: () => ReasonCodeService.getOne(id),

    enabled: enabled && !!id,

    staleTime: 1000 * 60 * 5,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateReasonCode() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof ReasonCodeService.create>[0]) =>
      ReasonCodeService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: reasonCodeQueryKeys.list(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateReasonCode() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof ReasonCodeService.update>[1];
    }) => ReasonCodeService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: reasonCodeQueryKeys.list(),
        }),

        queryClient.invalidateQueries({
          queryKey: reasonCodeQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteReasonCode() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => ReasonCodeService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: reasonCodeQueryKeys.list(),
        }),

        queryClient.removeQueries({
          queryKey: reasonCodeQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
