"use client";

import { BlacklistEntryService } from "@/services/commerce/risk-fraud/blacklist-entry/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const blacklistEntryQueryKeys = {
  all: ["blacklist-entry"] as const,

  list: () => [...blacklistEntryQueryKeys.all, "list"] as const,

  detail: (id: string) =>
    [...blacklistEntryQueryKeys.all, "detail", id] as const,
};

export function useBlacklistEntries(enabled = true) {
  return useQuery({
    queryKey: blacklistEntryQueryKeys.list(),
    queryFn: () => BlacklistEntryService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useBlacklistEntry(id: string, enabled = true) {
  return useQuery({
    queryKey: blacklistEntryQueryKeys.detail(id),
    queryFn: () => BlacklistEntryService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

export function useCreateBlacklistEntry() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof BlacklistEntryService.create>[0]) =>
      BlacklistEntryService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: blacklistEntryQueryKeys.list(),
      });
    },
  });
}

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
          queryKey: blacklistEntryQueryKeys.list(),
        }),

        queryClient.invalidateQueries({
          queryKey: blacklistEntryQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

export function useDeleteBlacklistEntry() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => BlacklistEntryService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: blacklistEntryQueryKeys.list(),
        }),

        queryClient.removeQueries({
          queryKey: blacklistEntryQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
