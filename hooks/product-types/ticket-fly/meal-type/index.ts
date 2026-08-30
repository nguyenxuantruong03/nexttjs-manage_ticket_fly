"use client";

import { FlyMealTypeService } from "@/services/product-types/ticket-fly/meal-type/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ======================================================
// Query Keys
// ======================================================

export const flyMealTypeQueryKeys = {
  all: ["fly-meal-type"] as const,
  list: () => [...flyMealTypeQueryKeys.all, "list"] as const,
  detail: (id: string) => [...flyMealTypeQueryKeys.all, "detail", id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useFlyMealTypes(enabled = true) {
  return useQuery({
    queryKey: flyMealTypeQueryKeys.list(),
    queryFn: () => FlyMealTypeService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useFlyMealType(id: string, enabled = true) {
  return useQuery({
    queryKey: flyMealTypeQueryKeys.detail(id),
    queryFn: () => FlyMealTypeService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateFlyMealType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof FlyMealTypeService.create>[0]) =>
      FlyMealTypeService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: flyMealTypeQueryKeys.list(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateFlyMealType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof FlyMealTypeService.update>[1];
    }) => FlyMealTypeService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: flyMealTypeQueryKeys.list(),
        }),
        queryClient.invalidateQueries({
          queryKey: flyMealTypeQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteFlyMealType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => FlyMealTypeService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: flyMealTypeQueryKeys.list(),
        }),
        queryClient.removeQueries({
          queryKey: flyMealTypeQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
