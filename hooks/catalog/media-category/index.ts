"use client";

import { MediaCategoryService } from "@/services/catalog/media-category/client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ======================================================
// Query Keys
// ======================================================

export const mediaCategoryQueryKeys = {
  all: ["media-category"] as const,

  list: () => [...mediaCategoryQueryKeys.all, "list"] as const,

  detail: (id: string) =>
    [...mediaCategoryQueryKeys.all, "detail", id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useMediaCategories(enabled = true) {
  return useQuery({
    queryKey: mediaCategoryQueryKeys.list(),

    queryFn: () => MediaCategoryService.getMany(),

    enabled,

    staleTime: 1000 * 60 * 5,
  });
}

export function useMediaCategory(id: string, enabled = true) {
  return useQuery({
    queryKey: mediaCategoryQueryKeys.detail(id),

    queryFn: () => MediaCategoryService.getOne(id),

    enabled: enabled && !!id,

    staleTime: 1000 * 60 * 5,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateMediaCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof MediaCategoryService.create>[0]) =>
      MediaCategoryService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: mediaCategoryQueryKeys.list(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateMediaCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof MediaCategoryService.update>[1];
    }) => MediaCategoryService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: mediaCategoryQueryKeys.list(),
        }),

        queryClient.invalidateQueries({
          queryKey: mediaCategoryQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteMediaCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => MediaCategoryService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: mediaCategoryQueryKeys.list(),
        }),

        queryClient.removeQueries({
          queryKey: mediaCategoryQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
