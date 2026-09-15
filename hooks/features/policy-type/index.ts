"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { PolicyTypeService } from "@/services/features/policy-type/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// QUERY KEYS
// ======================================================

export const policyTypeQueryKeys = {
  all: ["policy-type"] as const,

  lists: () => [...policyTypeQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...policyTypeQueryKeys.lists(), { page, limit }] as const,

  details: () => [...policyTypeQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...policyTypeQueryKeys.details(), id] as const,
};

// ======================================================
// FIND ALL
// ======================================================

export function usePolicyTypes(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: policyTypeQueryKeys.list(page, limit),

    queryFn: () =>
      PolicyTypeService.getMany({
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

export function usePolicyType(id: string, enabled = true) {
  return useQuery({
    queryKey: policyTypeQueryKeys.detail(id),

    queryFn: () => PolicyTypeService.getOne(id),

    enabled: enabled && Boolean(id),

    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// CREATE
// ======================================================

export function useCreatePolicyType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof PolicyTypeService.create>[0]) =>
      PolicyTypeService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: policyTypeQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// UPDATE
// ======================================================

export function useUpdatePolicyType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof PolicyTypeService.update>[1];
    }) => PolicyTypeService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: policyTypeQueryKeys.lists(),
        }),

        queryClient.invalidateQueries({
          queryKey: policyTypeQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// DELETE
// ======================================================

export function useDeletePolicyType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => PolicyTypeService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: policyTypeQueryKeys.lists(),
        }),

        queryClient.removeQueries({
          queryKey: policyTypeQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
