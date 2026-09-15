"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { SearchTagService } from "@/services/search/tag/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// Query Keys
// ======================================================

export const searchTagQueryKeys = {
  all: ["search-tag"] as const,

  lists: () => [...searchTagQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...searchTagQueryKeys.lists(), { page, limit }] as const,

  details: () => [...searchTagQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...searchTagQueryKeys.details(), id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useSearchTags(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: searchTagQueryKeys.list(page, limit),
    queryFn: () =>
      SearchTagService.getMany({
        page,
        limit,
      }),
    enabled,
    staleTime: DEFAULT_QUERY_STALE_TIME,
    placeholderData: keepPreviousData,
  });
}

export function useSearchTag(id: string, enabled = true) {
  return useQuery({
    queryKey: searchTagQueryKeys.detail(id),
    queryFn: () => SearchTagService.getOne(id),
    enabled: enabled && Boolean(id),
    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateSearchTag() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof SearchTagService.create>[0]) =>
      SearchTagService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: searchTagQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateSearchTag() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof SearchTagService.update>[1];
    }) => SearchTagService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: searchTagQueryKeys.lists(),
        }),
        queryClient.invalidateQueries({
          queryKey: searchTagQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteSearchTag() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => SearchTagService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: searchTagQueryKeys.lists(),
        }),
        queryClient.removeQueries({
          queryKey: searchTagQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
