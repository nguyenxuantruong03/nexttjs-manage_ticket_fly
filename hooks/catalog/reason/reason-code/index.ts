"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { ReasonCodeService } from "@/services/catalog/reason/reason-code/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// QUERY KEYS
// ======================================================

export const reasonCodeQueryKeys = {
  all: ["reason-code"] as const,

  lists: () => [...reasonCodeQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...reasonCodeQueryKeys.lists(), { page, limit }] as const,

  details: () => [...reasonCodeQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...reasonCodeQueryKeys.details(), id] as const,
};

// ======================================================
// FIND ALL
// ======================================================

export function useReasonCodes(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: reasonCodeQueryKeys.list(page, limit),

    queryFn: () =>
      ReasonCodeService.getMany({
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

export function useReasonCode(id: string, enabled = true) {
  return useQuery({
    queryKey: reasonCodeQueryKeys.detail(id),

    queryFn: () => ReasonCodeService.getOne(id),

    enabled: enabled && Boolean(id),

    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// CREATE
// ======================================================

export function useCreateReasonCode() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof ReasonCodeService.create>[0]) =>
      ReasonCodeService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: reasonCodeQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// UPDATE
// ======================================================

export function useUpdateReasonCode() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof ReasonCodeService.update>[1];
    }) => ReasonCodeService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: reasonCodeQueryKeys.lists(),
        }),

        queryClient.invalidateQueries({
          queryKey: reasonCodeQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// DELETE
// ======================================================

export function useDeleteReasonCode() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => ReasonCodeService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: reasonCodeQueryKeys.lists(),
        }),

        queryClient.removeQueries({
          queryKey: reasonCodeQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
