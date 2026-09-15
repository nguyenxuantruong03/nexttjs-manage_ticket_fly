"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { FlyAllianceService } from "@/services/product-types/references/alliance/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// Query Keys
// ======================================================

export const flyAllianceQueryKeys = {
  all: ["fly-alliance"] as const,

  lists: () => [...flyAllianceQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...flyAllianceQueryKeys.lists(), { page, limit }] as const,

  details: () => [...flyAllianceQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...flyAllianceQueryKeys.details(), id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useFlyAlliances(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: flyAllianceQueryKeys.list(page, limit),
    queryFn: () =>
      FlyAllianceService.getMany({
        page,
        limit,
      }),
    enabled,
    staleTime: DEFAULT_QUERY_STALE_TIME,
    placeholderData: keepPreviousData,
  });
}

export function useFlyAlliance(id: string, enabled = true) {
  return useQuery({
    queryKey: flyAllianceQueryKeys.detail(id),
    queryFn: () => FlyAllianceService.getOne(id),
    enabled: enabled && Boolean(id),
    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateFlyAlliance() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof FlyAllianceService.create>[0]) =>
      FlyAllianceService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: flyAllianceQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateFlyAlliance() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof FlyAllianceService.update>[1];
    }) => FlyAllianceService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: flyAllianceQueryKeys.lists(),
        }),
        queryClient.invalidateQueries({
          queryKey: flyAllianceQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteFlyAlliance() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => FlyAllianceService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: flyAllianceQueryKeys.lists(),
        }),
        queryClient.removeQueries({
          queryKey: flyAllianceQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
