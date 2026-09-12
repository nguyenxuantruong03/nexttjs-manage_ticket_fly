"use client";

import { RegulationCategoryService } from "@/services/commerce/compliance-legal/regulation-category/client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ======================================================
// Query Keys
// ======================================================

export const regulationCategoryQueryKeys = {
  all: ["regulation-category"] as const,

  list: () => [...regulationCategoryQueryKeys.all, "list"] as const,

  detail: (id: string) =>
    [...regulationCategoryQueryKeys.all, "detail", id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useRegulationCategories(enabled = true) {
  return useQuery({
    queryKey: regulationCategoryQueryKeys.list(),

    queryFn: () => RegulationCategoryService.getMany(),

    enabled,

    staleTime: 1000 * 60 * 5,
  });
}

export function useRegulationCategory(id: string, enabled = true) {
  return useQuery({
    queryKey: regulationCategoryQueryKeys.detail(id),

    queryFn: () => RegulationCategoryService.getOne(id),

    enabled: enabled && !!id,

    staleTime: 1000 * 60 * 5,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateRegulationCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (
      data: Parameters<typeof RegulationCategoryService.create>[0],
    ) => RegulationCategoryService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: regulationCategoryQueryKeys.list(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateRegulationCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof RegulationCategoryService.update>[1];
    }) => RegulationCategoryService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: regulationCategoryQueryKeys.list(),
        }),

        queryClient.invalidateQueries({
          queryKey: regulationCategoryQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteRegulationCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) =>
      RegulationCategoryService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: regulationCategoryQueryKeys.list(),
        }),

        queryClient.removeQueries({
          queryKey: regulationCategoryQueryKeys.detail(id),
        }),
      ]);
    },
  });
}