"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { BlacklistEntryService } from "@/services/commerce/risk-fraud/blacklist-entry/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// QUERY KEYS
// ======================================================

export const blacklistEntryQueryKeys = {
  all: ["blacklist-entry"] as const,

  lists: () => [...blacklistEntryQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...blacklistEntryQueryKeys.lists(), { page, limit }] as const,

  details: () => [...blacklistEntryQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...blacklistEntryQueryKeys.details(), id] as const,
};

// ======================================================
// FIND ALL
// ======================================================

export function useBlacklistEntries(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: blacklistEntryQueryKeys.list(page, limit),

    queryFn: () =>
      BlacklistEntryService.getMany({
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

export function useBlacklistEntry(id: string, enabled = true) {
  return useQuery({
    queryKey: blacklistEntryQueryKeys.detail(id),

    queryFn: () => BlacklistEntryService.getOne(id),

    enabled: enabled && Boolean(id),

    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// CREATE
// ======================================================

export function useCreateBlacklistEntry() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof BlacklistEntryService.create>[0]) =>
      BlacklistEntryService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: blacklistEntryQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// UPDATE
// ======================================================

export function useUpdateBlacklistEntry() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof BlacklistEntryService.update>[1];
    }) => BlacklistEntryService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: blacklistEntryQueryKeys.lists(),
        }),

        queryClient.invalidateQueries({
          queryKey: blacklistEntryQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// DELETE
// ======================================================

export function useDeleteBlacklistEntry() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => BlacklistEntryService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: blacklistEntryQueryKeys.lists(),
        }),

        queryClient.removeQueries({
          queryKey: blacklistEntryQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
