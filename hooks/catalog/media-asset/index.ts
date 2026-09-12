"use client";

import { MediaAssetService } from "@/services/catalog/media-asset/client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ======================================================
// Query Keys
// ======================================================

export const mediaAssetQueryKeys = {
  all: ["media-asset"] as const,

  list: () => [...mediaAssetQueryKeys.all, "list"] as const,

  detail: (id: string) =>
    [...mediaAssetQueryKeys.all, "detail", id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useMediaAssets(enabled = true) {
  return useQuery({
    queryKey: mediaAssetQueryKeys.list(),

    queryFn: () => MediaAssetService.getMany(),

    enabled,

    staleTime: 1000 * 60 * 5,
  });
}

export function useMediaAsset(id: string, enabled = true) {
  return useQuery({
    queryKey: mediaAssetQueryKeys.detail(id),

    queryFn: () => MediaAssetService.getOne(id),

    enabled: enabled && !!id,

    staleTime: 1000 * 60 * 5,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateMediaAsset() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (
      data: Parameters<typeof MediaAssetService.create>[0],
    ) => MediaAssetService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: mediaAssetQueryKeys.list(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateMediaAsset() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof MediaAssetService.update>[1];
    }) => MediaAssetService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: mediaAssetQueryKeys.list(),
        }),

        queryClient.invalidateQueries({
          queryKey: mediaAssetQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteMediaAsset() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => MediaAssetService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: mediaAssetQueryKeys.list(),
        }),

        queryClient.removeQueries({
          queryKey: mediaAssetQueryKeys.detail(id),
        }),
      ]);
    },
  });
}