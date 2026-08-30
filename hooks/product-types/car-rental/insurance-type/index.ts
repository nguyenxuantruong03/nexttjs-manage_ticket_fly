"use client";

import { CarRentalInsuranceTypeService } from "@/services/product-types/car-rental/insurance-type/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ======================================================
// Query Keys
// ======================================================

export const carRentalInsuranceTypeQueryKeys = {
  all: ["car-rental-insurance-type"] as const,
  list: () => [...carRentalInsuranceTypeQueryKeys.all, "list"] as const,
  detail: (id: string) =>
    [...carRentalInsuranceTypeQueryKeys.all, "detail", id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useCarRentalInsuranceTypes(enabled = true) {
  return useQuery({
    queryKey: carRentalInsuranceTypeQueryKeys.list(),
    queryFn: () => CarRentalInsuranceTypeService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useCarRentalInsuranceType(id: string, enabled = true) {
  return useQuery({
    queryKey: carRentalInsuranceTypeQueryKeys.detail(id),
    queryFn: () => CarRentalInsuranceTypeService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateCarRentalInsuranceType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (
      data: Parameters<typeof CarRentalInsuranceTypeService.create>[0],
    ) => CarRentalInsuranceTypeService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: carRentalInsuranceTypeQueryKeys.list(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateCarRentalInsuranceType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof CarRentalInsuranceTypeService.update>[1];
    }) => CarRentalInsuranceTypeService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: carRentalInsuranceTypeQueryKeys.list(),
        }),
        queryClient.invalidateQueries({
          queryKey: carRentalInsuranceTypeQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteCarRentalInsuranceType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => CarRentalInsuranceTypeService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: carRentalInsuranceTypeQueryKeys.list(),
        }),
        queryClient.removeQueries({
          queryKey: carRentalInsuranceTypeQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
