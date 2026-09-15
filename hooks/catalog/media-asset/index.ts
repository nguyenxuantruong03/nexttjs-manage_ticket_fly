"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { MediaAssetService } from "@/services/catalog/media-asset/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// QUERY KEYS
// ======================================================

export const mediaAssetQueryKeys = {
  all: ["media-asset"] as const,

  lists: () => [...mediaAssetQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...mediaAssetQueryKeys.lists(), { page, limit }] as const,

  details: () => [...mediaAssetQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...mediaAssetQueryKeys.details(), id] as const,
};

// ======================================================
// FIND ALL
// ======================================================

export function useMediaAssets(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: mediaAssetQueryKeys.list(page, limit),

    queryFn: () =>
      MediaAssetService.getMany({
        page,
        limit,
      }),

    enabled,

    staleTime: DEFAULT_QUERY_STALE_TIME,

    placeholderData: keepPreviousData,
  });
}

// ======================================================
// FIND ONE
// ======================================================

export function useMediaAsset(id: string, enabled = true) {
  return useQuery({
    queryKey: mediaAssetQueryKeys.detail(id),

    queryFn: () => MediaAssetService.getOne(id),

    enabled: enabled && Boolean(id),

    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// CREATE
// ======================================================

export function useCreateMediaAsset() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof MediaAssetService.create>[0]) =>
      MediaAssetService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: mediaAssetQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// UPDATE
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
          queryKey: mediaAssetQueryKeys.lists(),
        }),

        queryClient.invalidateQueries({
          queryKey: mediaAssetQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// DELETE
// ======================================================

export function useDeleteMediaAsset() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => MediaAssetService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: mediaAssetQueryKeys.lists(),
        }),

        queryClient.removeQueries({
          queryKey: mediaAssetQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
