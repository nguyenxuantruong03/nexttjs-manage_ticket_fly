"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { MediaCategoryService } from "@/services/catalog/media-category/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// QUERY KEYS
// ======================================================

export const mediaCategoryQueryKeys = {
  all: ["media-category"] as const,

  lists: () => [...mediaCategoryQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...mediaCategoryQueryKeys.lists(), { page, limit }] as const,

  details: () => [...mediaCategoryQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...mediaCategoryQueryKeys.details(), id] as const,
};

// ======================================================
// FIND ALL
// ======================================================

export function useMediaCategories(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: mediaCategoryQueryKeys.list(page, limit),

    queryFn: () =>
      MediaCategoryService.getMany({
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

export function useMediaCategory(id: string, enabled = true) {
  return useQuery({
    queryKey: mediaCategoryQueryKeys.detail(id),

    queryFn: () => MediaCategoryService.getOne(id),

    enabled: enabled && Boolean(id),

    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// CREATE
// ======================================================

export function useCreateMediaCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof MediaCategoryService.create>[0]) =>
      MediaCategoryService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: mediaCategoryQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// UPDATE
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
          queryKey: mediaCategoryQueryKeys.lists(),
        }),

        queryClient.invalidateQueries({
          queryKey: mediaCategoryQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// DELETE
// ======================================================

export function useDeleteMediaCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => MediaCategoryService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: mediaCategoryQueryKeys.lists(),
        }),

        queryClient.removeQueries({
          queryKey: mediaCategoryQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
