"use client";

import { WhitelistEntryService } from "@/services/commerce/risk-fraud/whitelist-entry/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const whitelistEntryQueryKeys = {
  all: ["whitelist-entry"] as const,

  list: () => [...whitelistEntryQueryKeys.all, "list"] as const,

  detail: (id: string) =>
    [...whitelistEntryQueryKeys.all, "detail", id] as const,
};

export function useWhitelistEntries(enabled = true) {
  return useQuery({
    queryKey: whitelistEntryQueryKeys.list(),
    queryFn: () => WhitelistEntryService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useWhitelistEntry(id: string, enabled = true) {
  return useQuery({
    queryKey: whitelistEntryQueryKeys.detail(id),
    queryFn: () => WhitelistEntryService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

export function useCreateWhitelistEntry() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof WhitelistEntryService.create>[0]) =>
      WhitelistEntryService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: whitelistEntryQueryKeys.list(),
      });
    },
  });
}

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
          queryKey: whitelistEntryQueryKeys.list(),
        }),

        queryClient.invalidateQueries({
          queryKey: whitelistEntryQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

export function useDeleteWhitelistEntry() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => WhitelistEntryService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: whitelistEntryQueryKeys.list(),
        }),

        queryClient.removeQueries({
          queryKey: whitelistEntryQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
