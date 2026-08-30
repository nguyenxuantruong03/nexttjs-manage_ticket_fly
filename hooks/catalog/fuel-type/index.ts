"use client";

import { FuelTypeService } from "@/services/catalog/fuel-type/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ======================================================
// Query Keys
// ======================================================

export const fuelTypeQueryKeys = {
  all: ["fuel-type"] as const,
  list: () => [...fuelTypeQueryKeys.all, "list"] as const,
  detail: (id: string) => [...fuelTypeQueryKeys.all, "detail", id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useFuelTypes(enabled = true) {
  return useQuery({
    queryKey: fuelTypeQueryKeys.list(),
    queryFn: () => FuelTypeService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useFuelType(id: string, enabled = true) {
  return useQuery({
    queryKey: fuelTypeQueryKeys.detail(id),
    queryFn: () => FuelTypeService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateFuelType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof FuelTypeService.create>[0]) =>
      FuelTypeService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: fuelTypeQueryKeys.list(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateFuelType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof FuelTypeService.update>[1];
    }) => FuelTypeService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: fuelTypeQueryKeys.list() }),
        queryClient.invalidateQueries({
          queryKey: fuelTypeQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteFuelType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => FuelTypeService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: fuelTypeQueryKeys.list() }),
        queryClient.removeQueries({ queryKey: fuelTypeQueryKeys.detail(id) }),
      ]);
    },
  });
}
