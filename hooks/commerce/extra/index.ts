"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { ExtraService } from "@/services/commerce/extra/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// QUERY KEYS
// ======================================================

export const extraQueryKeys = {
  all: ["extra"] as const,

  lists: () => [...extraQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...extraQueryKeys.lists(), { page, limit }] as const,

  details: () => [...extraQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...extraQueryKeys.details(), id] as const,
};

// ======================================================
// FIND ALL
// ======================================================

export function useExtras(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: extraQueryKeys.list(page, limit),

    queryFn: () =>
      ExtraService.getMany({
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

export function useExtra(id: string, enabled = true) {
  return useQuery({
    queryKey: extraQueryKeys.detail(id),

    queryFn: () => ExtraService.getOne(id),

    enabled: enabled && Boolean(id),

    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// CREATE
// ======================================================

export function useCreateExtra() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof ExtraService.create>[0]) =>
      ExtraService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: extraQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// UPDATE
// ======================================================

export function useUpdateExtra() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof ExtraService.update>[1];
    }) => ExtraService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: extraQueryKeys.lists(),
        }),

        queryClient.invalidateQueries({
          queryKey: extraQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// DELETE
// ======================================================

export function useDeleteExtra() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => ExtraService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: extraQueryKeys.lists(),
        }),

        queryClient.removeQueries({
          queryKey: extraQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
