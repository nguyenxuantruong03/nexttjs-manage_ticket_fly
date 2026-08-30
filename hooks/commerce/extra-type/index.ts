"use client";

import { ExtraTypeService } from "@/services/commerce/extra-type/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ======================================================
// Query Keys
// ======================================================

export const extraTypeQueryKeys = {
  all: ["extra-type"] as const,
  list: () => [...extraTypeQueryKeys.all, "list"] as const,
  detail: (id: string) => [...extraTypeQueryKeys.all, "detail", id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useExtraTypes(enabled = true) {
  return useQuery({
    queryKey: extraTypeQueryKeys.list(),
    queryFn: () => ExtraTypeService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useExtraType(id: string, enabled = true) {
  return useQuery({
    queryKey: extraTypeQueryKeys.detail(id),
    queryFn: () => ExtraTypeService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateExtraType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof ExtraTypeService.create>[0]) =>
      ExtraTypeService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: extraTypeQueryKeys.list(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateExtraType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof ExtraTypeService.update>[1];
    }) => ExtraTypeService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: extraTypeQueryKeys.list(),
        }),
        queryClient.invalidateQueries({
          queryKey: extraTypeQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteExtraType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => ExtraTypeService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: extraTypeQueryKeys.list(),
        }),
        queryClient.removeQueries({
          queryKey: extraTypeQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
