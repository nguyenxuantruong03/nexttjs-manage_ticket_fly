"use client";

import { CarRentalDocumentTypeService } from "@/services/product-types/car-rental/document-type/client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ======================================================
// Query Keys
// ======================================================

export const carRentalDocumentTypeQueryKeys = {
  all: ["car-rental-document-type"] as const,
  list: () => [...carRentalDocumentTypeQueryKeys.all, "list"] as const,
  detail: (id: string) =>
    [...carRentalDocumentTypeQueryKeys.all, "detail", id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useCarRentalDocumentTypes(enabled = true) {
  return useQuery({
    queryKey: carRentalDocumentTypeQueryKeys.list(),
    queryFn: () => CarRentalDocumentTypeService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useCarRentalDocumentType(id: string, enabled = true) {
  return useQuery({
    queryKey: carRentalDocumentTypeQueryKeys.detail(id),
    queryFn: () => CarRentalDocumentTypeService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateCarRentalDocumentType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (
      data: Parameters<typeof CarRentalDocumentTypeService.create>[0],
    ) => CarRentalDocumentTypeService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: carRentalDocumentTypeQueryKeys.list(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateCarRentalDocumentType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof CarRentalDocumentTypeService.update>[1];
    }) => CarRentalDocumentTypeService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: carRentalDocumentTypeQueryKeys.list(),
        }),
        queryClient.invalidateQueries({
          queryKey: carRentalDocumentTypeQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteCarRentalDocumentType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => CarRentalDocumentTypeService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: carRentalDocumentTypeQueryKeys.list(),
        }),
        queryClient.removeQueries({
          queryKey: carRentalDocumentTypeQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
