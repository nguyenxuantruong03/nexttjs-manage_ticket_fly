"use client";

import { FlyAddonTypeService } from "@/services/product-types/references/airline/addon-type/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ======================================================
// Query Keys
// ======================================================

export const flyAddonTypeQueryKeys = {
  all: ["fly-addon-type"] as const,
  list: () => [...flyAddonTypeQueryKeys.all, "list"] as const,
  detail: (id: string) => [...flyAddonTypeQueryKeys.all, "detail", id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useFlyAddonTypes(enabled = true) {
  return useQuery({
    queryKey: flyAddonTypeQueryKeys.list(),
    queryFn: () => FlyAddonTypeService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useFlyAddonType(id: string, enabled = true) {
  return useQuery({
    queryKey: flyAddonTypeQueryKeys.detail(id),
    queryFn: () => FlyAddonTypeService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
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
        queryKey: flyAddonTypeQueryKeys.list(),
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
          queryKey: flyAddonTypeQueryKeys.list(),
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
          queryKey: flyAddonTypeQueryKeys.list(),
        }),
        queryClient.removeQueries({
          queryKey: flyAddonTypeQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
