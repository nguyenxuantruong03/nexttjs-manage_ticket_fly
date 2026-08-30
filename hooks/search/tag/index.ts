"use client";
import { SearchTagService } from "@/services/search/tag/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ======================================================
// Query Keys
// ======================================================

export const searchTagQueryKeys = {
  all: ["search-tag"] as const,
  list: () => [...searchTagQueryKeys.all, "list"] as const,
  detail: (id: string) => [...searchTagQueryKeys.all, "detail", id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useSearchTags(enabled = true) {
  return useQuery({
    queryKey: searchTagQueryKeys.list(),
    queryFn: () => SearchTagService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useSearchTag(id: string, enabled = true) {
  return useQuery({
    queryKey: searchTagQueryKeys.detail(id),
    queryFn: () => SearchTagService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
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
        queryKey: searchTagQueryKeys.list(),
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
          queryKey: searchTagQueryKeys.list(),
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
          queryKey: searchTagQueryKeys.list(),
        }),
        queryClient.removeQueries({
          queryKey: searchTagQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
