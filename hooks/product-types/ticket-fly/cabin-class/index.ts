"use client";

import { FlyCabinClassService } from "@/services/product-types/ticket-fly/cabin-class/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ======================================================
// Query Keys
// ======================================================

export const flyCabinClassQueryKeys = {
  all: ["fly-cabin-class"] as const,
  list: () => [...flyCabinClassQueryKeys.all, "list"] as const,
  detail: (id: string) =>
    [...flyCabinClassQueryKeys.all, "detail", id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useFlyCabinClasses(enabled = true) {
  return useQuery({
    queryKey: flyCabinClassQueryKeys.list(),
    queryFn: () => FlyCabinClassService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useFlyCabinClass(id: string, enabled = true) {
  return useQuery({
    queryKey: flyCabinClassQueryKeys.detail(id),
    queryFn: () => FlyCabinClassService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateFlyCabinClass() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof FlyCabinClassService.create>[0]) =>
      FlyCabinClassService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: flyCabinClassQueryKeys.list(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateFlyCabinClass() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof FlyCabinClassService.update>[1];
    }) => FlyCabinClassService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: flyCabinClassQueryKeys.list(),
        }),
        queryClient.invalidateQueries({
          queryKey: flyCabinClassQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteFlyCabinClass() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => FlyCabinClassService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: flyCabinClassQueryKeys.list(),
        }),
        queryClient.removeQueries({
          queryKey: flyCabinClassQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
