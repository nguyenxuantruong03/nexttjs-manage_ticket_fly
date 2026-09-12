"use client";

import { RegulationService } from "@/services/commerce/compliance-legal/regulation/client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ======================================================
// Query Keys
// ======================================================

export const regulationQueryKeys = {
  all: ["regulation"] as const,

  list: () => [...regulationQueryKeys.all, "list"] as const,

  detail: (id: string) =>
    [...regulationQueryKeys.all, "detail", id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useRegulations(enabled = true) {
  return useQuery({
    queryKey: regulationQueryKeys.list(),

    queryFn: () => RegulationService.getMany(),

    enabled,

    staleTime: 1000 * 60 * 5,
  });
}

export function useRegulation(id: string, enabled = true) {
  return useQuery({
    queryKey: regulationQueryKeys.detail(id),

    queryFn: () => RegulationService.getOne(id),

    enabled: enabled && !!id,

    staleTime: 1000 * 60 * 5,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateRegulation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (
      data: Parameters<typeof RegulationService.create>[0],
    ) => RegulationService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: regulationQueryKeys.list(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateRegulation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof RegulationService.update>[1];
    }) => RegulationService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: regulationQueryKeys.list(),
        }),

        queryClient.invalidateQueries({
          queryKey: regulationQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteRegulation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => RegulationService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: regulationQueryKeys.list(),
        }),

        queryClient.removeQueries({
          queryKey: regulationQueryKeys.detail(id),
        }),
      ]);
    },
  });
}