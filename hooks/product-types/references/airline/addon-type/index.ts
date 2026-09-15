"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { FlyAddonTypeService } from "@/services/product-types/references/airline/addon-type/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// Query Keys
// ======================================================

export const flyAddonTypeQueryKeys = {
  all: ["fly-addon-type"] as const,

  lists: () => [...flyAddonTypeQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...flyAddonTypeQueryKeys.lists(), { page, limit }] as const,

  details: () => [...flyAddonTypeQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...flyAddonTypeQueryKeys.details(), id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useFlyAddonTypes(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: flyAddonTypeQueryKeys.list(page, limit),
    queryFn: () =>
      FlyAddonTypeService.getMany({
        page,
        limit,
      }),
    enabled,
    staleTime: DEFAULT_QUERY_STALE_TIME,
    placeholderData: keepPreviousData,
  });
}

export function useFlyAddonType(id: string, enabled = true) {
  return useQuery({
    queryKey: flyAddonTypeQueryKeys.detail(id),
    queryFn: () => FlyAddonTypeService.getOne(id),
    enabled: enabled && Boolean(id),
    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateFlyAddonType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof FlyAddonTypeService.create>[0]) =>
      FlyAddonTypeService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: flyAddonTypeQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateFlyAddonType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof FlyAddonTypeService.update>[1];
    }) => FlyAddonTypeService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: flyAddonTypeQueryKeys.lists(),
        }),
        queryClient.invalidateQueries({
          queryKey: flyAddonTypeQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteFlyAddonType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => FlyAddonTypeService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: flyAddonTypeQueryKeys.lists(),
        }),
        queryClient.removeQueries({
          queryKey: flyAddonTypeQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
