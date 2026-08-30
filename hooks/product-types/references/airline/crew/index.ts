"use client";

import { FlyCrewService } from "@/services/product-types/references/airline/crew/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ======================================================
// Query Keys
// ======================================================

export const flyCrewQueryKeys = {
  all: ["fly-crew"] as const,
  list: () => [...flyCrewQueryKeys.all, "list"] as const,
  detail: (id: string) => [...flyCrewQueryKeys.all, "detail", id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useFlyCrews(enabled = true) {
  return useQuery({
    queryKey: flyCrewQueryKeys.list(),
    queryFn: () => FlyCrewService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useFlyCrew(id: string, enabled = true) {
  return useQuery({
    queryKey: flyCrewQueryKeys.detail(id),
    queryFn: () => FlyCrewService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateFlyCrew() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof FlyCrewService.create>[0]) =>
      FlyCrewService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: flyCrewQueryKeys.list(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateFlyCrew() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof FlyCrewService.update>[1];
    }) => FlyCrewService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: flyCrewQueryKeys.list(),
        }),
        queryClient.invalidateQueries({
          queryKey: flyCrewQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteFlyCrew() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => FlyCrewService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: flyCrewQueryKeys.list(),
        }),
        queryClient.removeQueries({
          queryKey: flyCrewQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
