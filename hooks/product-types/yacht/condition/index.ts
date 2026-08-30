"use client";

import { YachtConditionService } from "@/services/product-types/yacht/condition/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ======================================================
// Query Keys
// ======================================================

export const yachtConditionQueryKeys = {
  all: ["yacht-condition"] as const,
  list: () => [...yachtConditionQueryKeys.all, "list"] as const,
  detail: (id: string) =>
    [...yachtConditionQueryKeys.all, "detail", id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useYachtConditions(enabled = true) {
  return useQuery({
    queryKey: yachtConditionQueryKeys.list(),
    queryFn: () => YachtConditionService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useYachtCondition(id: string, enabled = true) {
  return useQuery({
    queryKey: yachtConditionQueryKeys.detail(id),
    queryFn: () => YachtConditionService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
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
        queryKey: yachtConditionQueryKeys.list(),
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
          queryKey: yachtConditionQueryKeys.list(),
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
          queryKey: yachtConditionQueryKeys.list(),
        }),
        queryClient.removeQueries({
          queryKey: yachtConditionQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
