"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { YachtService } from "@/services/product-types/yacht/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// Query Keys
// ======================================================

export const yachtQueryKeys = {
  all: ["yacht"] as const,

  lists: () => [...yachtQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...yachtQueryKeys.lists(), { page, limit }] as const,

  details: () => [...yachtQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...yachtQueryKeys.details(), id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useYachts(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: yachtQueryKeys.list(page, limit),
    queryFn: () =>
      YachtService.getMany({
        page,
        limit,
      }),
    enabled,
    staleTime: DEFAULT_QUERY_STALE_TIME,
    placeholderData: keepPreviousData,
  });
}

export function useYacht(id: string, enabled = true) {
  return useQuery({
    queryKey: yachtQueryKeys.detail(id),
    queryFn: () => YachtService.getOne(id),
    enabled: enabled && Boolean(id),
    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateYacht() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof YachtService.create>[0]) =>
      YachtService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: yachtQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateYacht() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof YachtService.update>[1];
    }) => YachtService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: yachtQueryKeys.lists(),
        }),
        queryClient.invalidateQueries({
          queryKey: yachtQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteYacht() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => YachtService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: yachtQueryKeys.lists(),
        }),
        queryClient.removeQueries({
          queryKey: yachtQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
