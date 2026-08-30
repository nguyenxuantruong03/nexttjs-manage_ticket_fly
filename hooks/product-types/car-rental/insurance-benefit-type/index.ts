"use client";

import { CarRentalInsuranceBenefitTypeService } from "@/services/product-types/car-rental/insurance-benefit-type/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ======================================================
// Query Keys
// ======================================================

export const carRentalInsuranceBenefitTypeQueryKeys = {
  all: ["car-rental-insurance-benefit-type"] as const,
  list: () => [...carRentalInsuranceBenefitTypeQueryKeys.all, "list"] as const,
  detail: (id: string) =>
    [...carRentalInsuranceBenefitTypeQueryKeys.all, "detail", id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useCarRentalInsuranceBenefitTypes(enabled = true) {
  return useQuery({
    queryKey: carRentalInsuranceBenefitTypeQueryKeys.list(),
    queryFn: () => CarRentalInsuranceBenefitTypeService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useCarRentalInsuranceBenefitType(id: string, enabled = true) {
  return useQuery({
    queryKey: carRentalInsuranceBenefitTypeQueryKeys.detail(id),
    queryFn: () => CarRentalInsuranceBenefitTypeService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateCarRentalInsuranceBenefitType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (
      data: Parameters<typeof CarRentalInsuranceBenefitTypeService.create>[0],
    ) => CarRentalInsuranceBenefitTypeService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: carRentalInsuranceBenefitTypeQueryKeys.list(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateCarRentalInsuranceBenefitType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof CarRentalInsuranceBenefitTypeService.update>[1];
    }) => CarRentalInsuranceBenefitTypeService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: carRentalInsuranceBenefitTypeQueryKeys.list(),
        }),
        queryClient.invalidateQueries({
          queryKey: carRentalInsuranceBenefitTypeQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteCarRentalInsuranceBenefitType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => CarRentalInsuranceBenefitTypeService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: carRentalInsuranceBenefitTypeQueryKeys.list(),
        }),
        queryClient.removeQueries({
          queryKey: carRentalInsuranceBenefitTypeQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
