"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { ReasonContextService } from "@/services/catalog/reason/reason-context/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// QUERY KEYS
// ======================================================

export const reasonContextQueryKeys = {
  all: ["reason-context"] as const,

  lists: () => [...reasonContextQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...reasonContextQueryKeys.lists(), { page, limit }] as const,

  details: () => [...reasonContextQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...reasonContextQueryKeys.details(), id] as const,
};

// ======================================================
// FIND ALL
// ======================================================

export function useReasonContexts(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: reasonContextQueryKeys.list(page, limit),

    queryFn: () =>
      ReasonContextService.getMany({
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

export function useReasonContext(id: string, enabled = true) {
  return useQuery({
    queryKey: reasonContextQueryKeys.detail(id),

    queryFn: () => ReasonContextService.getOne(id),

    enabled: enabled && Boolean(id),

    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// CREATE
// ======================================================

export function useCreateReasonContext() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof ReasonContextService.create>[0]) =>
      ReasonContextService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: reasonContextQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// UPDATE
// ======================================================

export function useUpdateReasonContext() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof ReasonContextService.update>[1];
    }) => ReasonContextService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: reasonContextQueryKeys.lists(),
        }),

        queryClient.invalidateQueries({
          queryKey: reasonContextQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// DELETE
// ======================================================

export function useDeleteReasonContext() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => ReasonContextService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: reasonContextQueryKeys.lists(),
        }),

        queryClient.removeQueries({
          queryKey: reasonContextQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
