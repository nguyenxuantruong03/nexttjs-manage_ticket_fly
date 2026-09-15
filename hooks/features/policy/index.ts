"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { PolicyService } from "@/services/features/policy/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// QUERY KEYS
// ======================================================

export const policyQueryKeys = {
  all: ["policy"] as const,

  lists: () => [...policyQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...policyQueryKeys.lists(), { page, limit }] as const,

  details: () => [...policyQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...policyQueryKeys.details(), id] as const,
};

// ======================================================
// FIND ALL
// ======================================================

export function usePolicies(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: policyQueryKeys.list(page, limit),

    queryFn: () =>
      PolicyService.getMany({
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

export function usePolicy(id: string, enabled = true) {
  return useQuery({
    queryKey: policyQueryKeys.detail(id),

    queryFn: () => PolicyService.getOne(id),

    enabled: enabled && Boolean(id),

    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// CREATE
// ======================================================

export function useCreatePolicy() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof PolicyService.create>[0]) =>
      PolicyService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: policyQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// UPDATE
// ======================================================

export function useUpdatePolicy() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof PolicyService.update>[1];
    }) => PolicyService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: policyQueryKeys.lists(),
        }),

        queryClient.invalidateQueries({
          queryKey: policyQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// DELETE
// ======================================================

export function useDeletePolicy() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => PolicyService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: policyQueryKeys.lists(),
        }),

        queryClient.removeQueries({
          queryKey: policyQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
