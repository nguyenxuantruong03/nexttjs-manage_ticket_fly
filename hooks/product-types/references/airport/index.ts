"use client";
import { FlyAirportService } from "@/services/product-types/references/airport/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ======================================================
// Query Keys
// ======================================================

export const flyAirportQueryKeys = {
  all: ["fly-airport"] as const,
  list: () => [...flyAirportQueryKeys.all, "list"] as const,
  detail: (id: string) => [...flyAirportQueryKeys.all, "detail", id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useFliesAirport(enabled = true) {
  return useQuery({
    queryKey: flyAirportQueryKeys.list(),
    queryFn: () => FlyAirportService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useFlyAirport(id: string, enabled = true) {
  return useQuery({
    queryKey: flyAirportQueryKeys.detail(id),
    queryFn: () => FlyAirportService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateFlyAirport() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof FlyAirportService.create>[0]) =>
      FlyAirportService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: flyAirportQueryKeys.list(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateFlyAirport() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof FlyAirportService.update>[1];
    }) => FlyAirportService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: flyAirportQueryKeys.list(),
        }),
        queryClient.invalidateQueries({
          queryKey: flyAirportQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteFlyAirport() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => FlyAirportService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: flyAirportQueryKeys.list(),
        }),
        queryClient.removeQueries({
          queryKey: flyAirportQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
