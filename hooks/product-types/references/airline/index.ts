"use client";

import { FlyAirlineService } from "@/services/product-types/references/airline/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ======================================================
// Query Keys
// ======================================================

export const flyAirlineQueryKeys = {
  all: ["fly-airline"] as const,
  list: () => [...flyAirlineQueryKeys.all, "list"] as const,
  detail: (id: string) => [...flyAirlineQueryKeys.all, "detail", id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useFlyAirlines(enabled = true) {
  return useQuery({
    queryKey: flyAirlineQueryKeys.list(),
    queryFn: () => FlyAirlineService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useFlyAirline(id: string, enabled = true) {
  return useQuery({
    queryKey: flyAirlineQueryKeys.detail(id),
    queryFn: () => FlyAirlineService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateFlyAirline() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof FlyAirlineService.create>[0]) =>
      FlyAirlineService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: flyAirlineQueryKeys.list(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateFlyAirline() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof FlyAirlineService.update>[1];
    }) => FlyAirlineService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: flyAirlineQueryKeys.list(),
        }),
        queryClient.invalidateQueries({
          queryKey: flyAirlineQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteFlyAirline() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => FlyAirlineService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: flyAirlineQueryKeys.list(),
        }),
        queryClient.removeQueries({
          queryKey: flyAirlineQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
