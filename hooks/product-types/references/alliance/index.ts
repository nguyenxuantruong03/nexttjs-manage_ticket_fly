"use client";

import { FlyAllianceService } from "@/services/product-types/references/alliance/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ======================================================
// Query Keys
// ======================================================

export const flyAllianceQueryKeys = {
  all: ["fly-alliance"] as const,
  list: () => [...flyAllianceQueryKeys.all, "list"] as const,
  detail: (id: string) => [...flyAllianceQueryKeys.all, "detail", id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useFlyAlliances(enabled = true) {
  return useQuery({
    queryKey: flyAllianceQueryKeys.list(),
    queryFn: () => FlyAllianceService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useFlyAlliance(id: string, enabled = true) {
  return useQuery({
    queryKey: flyAllianceQueryKeys.detail(id),
    queryFn: () => FlyAllianceService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateFlyAlliance() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof FlyAllianceService.create>[0]) =>
      FlyAllianceService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: flyAllianceQueryKeys.list(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateFlyAlliance() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof FlyAllianceService.update>[1];
    }) => FlyAllianceService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: flyAllianceQueryKeys.list(),
        }),
        queryClient.invalidateQueries({
          queryKey: flyAllianceQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteFlyAlliance() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => FlyAllianceService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: flyAllianceQueryKeys.list(),
        }),
        queryClient.removeQueries({
          queryKey: flyAllianceQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
