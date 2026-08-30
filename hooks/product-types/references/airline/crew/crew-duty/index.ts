"use client";

import { FlyCrewDutyService } from "@/services/product-types/references/airline/crew/crew-duty/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ======================================================
// Query Keys
// ======================================================

export const flyCrewDutyQueryKeys = {
  all: ["fly-crew-duty"] as const,
  list: () => [...flyCrewDutyQueryKeys.all, "list"] as const,
  detail: (id: string) => [...flyCrewDutyQueryKeys.all, "detail", id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useFlyCrewDuties(enabled = true) {
  return useQuery({
    queryKey: flyCrewDutyQueryKeys.list(),
    queryFn: () => FlyCrewDutyService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useFlyCrewDuty(id: string, enabled = true) {
  return useQuery({
    queryKey: flyCrewDutyQueryKeys.detail(id),
    queryFn: () => FlyCrewDutyService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateFlyCrewDuty() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof FlyCrewDutyService.create>[0]) =>
      FlyCrewDutyService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: flyCrewDutyQueryKeys.list(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateFlyCrewDuty() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof FlyCrewDutyService.update>[1];
    }) => FlyCrewDutyService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: flyCrewDutyQueryKeys.list(),
        }),
        queryClient.invalidateQueries({
          queryKey: flyCrewDutyQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteFlyCrewDuty() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => FlyCrewDutyService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: flyCrewDutyQueryKeys.list(),
        }),
        queryClient.removeQueries({
          queryKey: flyCrewDutyQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
