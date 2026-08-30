"use client";

import { VehicleTypeService } from "@/services/catalog/vehicle-type/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ======================================================
// Query Keys
// ======================================================

export const vehicleTypeQueryKeys = {
  all: ["vehicle-type"] as const,
  list: () => [...vehicleTypeQueryKeys.all, "list"] as const,
  detail: (id: string) => [...vehicleTypeQueryKeys.all, "detail", id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useVehicleTypes(enabled = true) {
  return useQuery({
    queryKey: vehicleTypeQueryKeys.list(),
    queryFn: () => VehicleTypeService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useVehicleType(id: string, enabled = true) {
  return useQuery({
    queryKey: vehicleTypeQueryKeys.detail(id),
    queryFn: () => VehicleTypeService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateVehicleType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof VehicleTypeService.create>[0]) =>
      VehicleTypeService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: vehicleTypeQueryKeys.list(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateVehicleType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof VehicleTypeService.update>[1];
    }) => VehicleTypeService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: vehicleTypeQueryKeys.list(),
        }),
        queryClient.invalidateQueries({
          queryKey: vehicleTypeQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteVehicleType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => VehicleTypeService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: vehicleTypeQueryKeys.list(),
        }),
        queryClient.removeQueries({
          queryKey: vehicleTypeQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
