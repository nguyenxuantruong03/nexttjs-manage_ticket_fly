"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { FlyCrewRoleService } from "@/services/product-types/references/airline/crew/crew-role/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// Query Keys
// ======================================================

export const flyCrewRoleQueryKeys = {
  all: ["fly-crew-role"] as const,

  lists: () => [...flyCrewRoleQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...flyCrewRoleQueryKeys.lists(), { page, limit }] as const,

  details: () => [...flyCrewRoleQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...flyCrewRoleQueryKeys.details(), id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useFlyCrewRoles(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: flyCrewRoleQueryKeys.list(page, limit),
    queryFn: () =>
      FlyCrewRoleService.getMany({
        page,
        limit,
      }),
    enabled,
    staleTime: DEFAULT_QUERY_STALE_TIME,
    placeholderData: keepPreviousData,
  });
}

export function useFlyCrewRole(id: string, enabled = true) {
  return useQuery({
    queryKey: flyCrewRoleQueryKeys.detail(id),
    queryFn: () => FlyCrewRoleService.getOne(id),
    enabled: enabled && Boolean(id),
    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateFlyCrewRole() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof FlyCrewRoleService.create>[0]) =>
      FlyCrewRoleService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: flyCrewRoleQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateFlyCrewRole() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof FlyCrewRoleService.update>[1];
    }) => FlyCrewRoleService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: flyCrewRoleQueryKeys.lists(),
        }),
        queryClient.invalidateQueries({
          queryKey: flyCrewRoleQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteFlyCrewRole() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => FlyCrewRoleService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: flyCrewRoleQueryKeys.lists(),
        }),
        queryClient.removeQueries({
          queryKey: flyCrewRoleQueryKeys.detail(id),
        }),
      ]);
    },
  });
}