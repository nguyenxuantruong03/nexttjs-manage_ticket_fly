"use client";

import { YachtCrewRoleService } from "@/services/product-types/yacht/crew-role/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ======================================================
// Query Keys
// ======================================================

export const yachtCrewRoleQueryKeys = {
  all: ["yacht-crew-role"] as const,
  list: () => [...yachtCrewRoleQueryKeys.all, "list"] as const,
  detail: (id: string) =>
    [...yachtCrewRoleQueryKeys.all, "detail", id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useYachtCrewRoles(enabled = true) {
  return useQuery({
    queryKey: yachtCrewRoleQueryKeys.list(),
    queryFn: () => YachtCrewRoleService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useYachtCrewRole(id: string, enabled = true) {
  return useQuery({
    queryKey: yachtCrewRoleQueryKeys.detail(id),
    queryFn: () => YachtCrewRoleService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateYachtCrewRole() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof YachtCrewRoleService.create>[0]) =>
      YachtCrewRoleService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: yachtCrewRoleQueryKeys.list(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateYachtCrewRole() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof YachtCrewRoleService.update>[1];
    }) => YachtCrewRoleService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: yachtCrewRoleQueryKeys.list(),
        }),
        queryClient.invalidateQueries({
          queryKey: yachtCrewRoleQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteYachtCrewRole() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => YachtCrewRoleService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: yachtCrewRoleQueryKeys.list(),
        }),
        queryClient.removeQueries({
          queryKey: yachtCrewRoleQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
