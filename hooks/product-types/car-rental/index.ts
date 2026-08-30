"use client";
import { CarRentalService } from "@/services/product-types/car-rental/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ======================================================
// Query Keys
// ======================================================

export const carRentalQueryKeys = {
  all: ["car-rental"] as const,
  list: () => [...carRentalQueryKeys.all, "list"] as const,
  detail: (id: string) => [...carRentalQueryKeys.all, "detail", id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useCarRentals(enabled = true) {
  return useQuery({
    queryKey: carRentalQueryKeys.list(),
    queryFn: () => CarRentalService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useCarRental(id: string, enabled = true) {
  return useQuery({
    queryKey: carRentalQueryKeys.detail(id),
    queryFn: () => CarRentalService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateCarRental() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof CarRentalService.create>[0]) =>
      CarRentalService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: carRentalQueryKeys.list(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateCarRental() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof CarRentalService.update>[1];
    }) => CarRentalService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: carRentalQueryKeys.list() }),
        queryClient.invalidateQueries({
          queryKey: carRentalQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteCarRental() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => CarRentalService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: carRentalQueryKeys.list() }),
        queryClient.removeQueries({ queryKey: carRentalQueryKeys.detail(id) }),
      ]);
    },
  });
}
