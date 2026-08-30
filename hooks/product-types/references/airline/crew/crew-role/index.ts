"use client";

import { FlyCrewRoleService } from "@/services/product-types/references/airline/crew/crew-role/client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ======================================================
// Query Keys
// ======================================================

export const flyCrewRoleQueryKeys = {
  all: ["fly-crew-role"] as const,
  list: () => [...flyCrewRoleQueryKeys.all, "list"] as const,
  detail: (id: string) => [...flyCrewRoleQueryKeys.all, "detail", id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useFlyCrewRoles(enabled = true) {
  return useQuery({
    queryKey: flyCrewRoleQueryKeys.list(),
    queryFn: () => FlyCrewRoleService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useFlyCrewRole(id: string, enabled = true) {
  return useQuery({
    queryKey: flyCrewRoleQueryKeys.detail(id),
    queryFn: () => FlyCrewRoleService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
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
        queryKey: flyCrewRoleQueryKeys.list(),
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
          queryKey: flyCrewRoleQueryKeys.list(),
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
          queryKey: flyCrewRoleQueryKeys.list(),
        }),
        queryClient.removeQueries({
          queryKey: flyCrewRoleQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
