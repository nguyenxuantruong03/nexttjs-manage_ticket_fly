"use client";

import { FlyAircraftService } from "@/services/product-types/references/airline/aircraft/client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ======================================================
// Query Keys
// ======================================================

export const flyAircraftQueryKeys = {
  all: ["fly-aircraft"] as const,
  list: () => [...flyAircraftQueryKeys.all, "list"] as const,
  detail: (id: string) => [...flyAircraftQueryKeys.all, "detail", id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useFlyAircrafts(enabled = true) {
  return useQuery({
    queryKey: flyAircraftQueryKeys.list(),
    queryFn: () => FlyAircraftService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useFlyAircraft(id: string, enabled = true) {
  return useQuery({
    queryKey: flyAircraftQueryKeys.detail(id),
    queryFn: () => FlyAircraftService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateFlyAircraft() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof FlyAircraftService.create>[0]) =>
      FlyAircraftService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: flyAircraftQueryKeys.list(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateFlyAircraft() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof FlyAircraftService.update>[1];
    }) => FlyAircraftService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: flyAircraftQueryKeys.list(),
        }),
        queryClient.invalidateQueries({
          queryKey: flyAircraftQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteFlyAircraft() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => FlyAircraftService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: flyAircraftQueryKeys.list(),
        }),
        queryClient.removeQueries({
          queryKey: flyAircraftQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
