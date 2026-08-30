"use client";

import { FlyAircraftTypeService } from "@/services/product-types/references/airline/aircraft/aircraft-type/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ======================================================
// Query Keys
// ======================================================

export const flyAircraftTypeQueryKeys = {
  all: ["fly-aircraft-type"] as const,
  list: () => [...flyAircraftTypeQueryKeys.all, "list"] as const,
  detail: (id: string) =>
    [...flyAircraftTypeQueryKeys.all, "detail", id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useFlyAircraftTypes(enabled = true) {
  return useQuery({
    queryKey: flyAircraftTypeQueryKeys.list(),
    queryFn: () => FlyAircraftTypeService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useFlyAircraftType(id: string, enabled = true) {
  return useQuery({
    queryKey: flyAircraftTypeQueryKeys.detail(id),
    queryFn: () => FlyAircraftTypeService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateFlyAircraftType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof FlyAircraftTypeService.create>[0]) =>
      FlyAircraftTypeService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: flyAircraftTypeQueryKeys.list(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateFlyAircraftType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof FlyAircraftTypeService.update>[1];
    }) => FlyAircraftTypeService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: flyAircraftTypeQueryKeys.list(),
        }),
        queryClient.invalidateQueries({
          queryKey: flyAircraftTypeQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteFlyAircraftType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => FlyAircraftTypeService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: flyAircraftTypeQueryKeys.list(),
        }),
        queryClient.removeQueries({
          queryKey: flyAircraftTypeQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
