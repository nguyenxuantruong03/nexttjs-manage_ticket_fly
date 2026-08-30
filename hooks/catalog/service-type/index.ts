"use client";

import { ServiceTypeService } from "@/services/catalog/service-type/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ======================================================
// Query Keys
// ======================================================

export const serviceTypeQueryKeys = {
  all: ["service-type"] as const,
  list: () => [...serviceTypeQueryKeys.all, "list"] as const,
  detail: (id: string) => [...serviceTypeQueryKeys.all, "detail", id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useServiceTypes(enabled = true) {
  return useQuery({
    queryKey: serviceTypeQueryKeys.list(),
    queryFn: () => ServiceTypeService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useServiceType(id: string, enabled = true) {
  return useQuery({
    queryKey: serviceTypeQueryKeys.detail(id),
    queryFn: () => ServiceTypeService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateServiceType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof ServiceTypeService.create>[0]) =>
      ServiceTypeService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: serviceTypeQueryKeys.list(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateServiceType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof ServiceTypeService.update>[1];
    }) => ServiceTypeService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: serviceTypeQueryKeys.list(),
        }),
        queryClient.invalidateQueries({
          queryKey: serviceTypeQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteServiceType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => ServiceTypeService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: serviceTypeQueryKeys.list(),
        }),
        queryClient.removeQueries({
          queryKey: serviceTypeQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
