"use client";

import { FlyFareRuleTypeService } from "@/services/product-types/ticket-fly/fare-rule-type/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ======================================================
// Query Keys
// ======================================================

export const flyFareRuleTypeQueryKeys = {
  all: ["fly-fare-rule-type"] as const,
  list: () => [...flyFareRuleTypeQueryKeys.all, "list"] as const,
  detail: (id: string) =>
    [...flyFareRuleTypeQueryKeys.all, "detail", id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useFlyFareRuleTypes(enabled = true) {
  return useQuery({
    queryKey: flyFareRuleTypeQueryKeys.list(),
    queryFn: () => FlyFareRuleTypeService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useFlyFareRuleType(id: string, enabled = true) {
  return useQuery({
    queryKey: flyFareRuleTypeQueryKeys.detail(id),
    queryFn: () => FlyFareRuleTypeService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateFlyFareRuleType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof FlyFareRuleTypeService.create>[0]) =>
      FlyFareRuleTypeService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: flyFareRuleTypeQueryKeys.list(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateFlyFareRuleType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof FlyFareRuleTypeService.update>[1];
    }) => FlyFareRuleTypeService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: flyFareRuleTypeQueryKeys.list(),
        }),
        queryClient.invalidateQueries({
          queryKey: flyFareRuleTypeQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteFlyFareRuleType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => FlyFareRuleTypeService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: flyFareRuleTypeQueryKeys.list(),
        }),
        queryClient.removeQueries({
          queryKey: flyFareRuleTypeQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
