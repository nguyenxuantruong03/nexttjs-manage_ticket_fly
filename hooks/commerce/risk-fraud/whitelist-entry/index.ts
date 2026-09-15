"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { WhitelistEntryService } from "@/services/commerce/risk-fraud/whitelist-entry/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// QUERY KEYS
// ======================================================

export const whitelistEntryQueryKeys = {
  all: ["whitelist-entry"] as const,

  lists: () => [...whitelistEntryQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...whitelistEntryQueryKeys.lists(), { page, limit }] as const,

  details: () => [...whitelistEntryQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...whitelistEntryQueryKeys.details(), id] as const,
};

// ======================================================
// FIND ALL
// ======================================================

export function useWhitelistEntries(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: whitelistEntryQueryKeys.list(page, limit),

    queryFn: () =>
      WhitelistEntryService.getMany({
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

export function useWhitelistEntry(id: string, enabled = true) {
  return useQuery({
    queryKey: whitelistEntryQueryKeys.detail(id),

    queryFn: () => WhitelistEntryService.getOne(id),

    enabled: enabled && Boolean(id),

    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// CREATE
// ======================================================

export function useCreateWhitelistEntry() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof WhitelistEntryService.create>[0]) =>
      WhitelistEntryService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: whitelistEntryQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// UPDATE
// ======================================================

export function useUpdateWhitelistEntry() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof WhitelistEntryService.update>[1];
    }) => WhitelistEntryService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: whitelistEntryQueryKeys.lists(),
        }),

        queryClient.invalidateQueries({
          queryKey: whitelistEntryQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// DELETE
// ======================================================

export function useDeleteWhitelistEntry() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => WhitelistEntryService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: whitelistEntryQueryKeys.lists(),
        }),

        queryClient.removeQueries({
          queryKey: whitelistEntryQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
