"use client";

import { FeatureFlagService } from "@/services/commerce/feature-flag/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ======================================================
// Query Keys
// ======================================================

export const featureFlagQueryKeys = {
  all: ["feature-flag"] as const,

  list: () => [...featureFlagQueryKeys.all, "list"] as const,

  detail: (id: string) => [...featureFlagQueryKeys.all, "detail", id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useFeatureFlags(enabled = true) {
  return useQuery({
    queryKey: featureFlagQueryKeys.list(),

    queryFn: () => FeatureFlagService.getMany(),

    enabled,

    staleTime: 1000 * 60 * 5,
  });
}

export function useFeatureFlag(id: string, enabled = true) {
  return useQuery({
    queryKey: featureFlagQueryKeys.detail(id),

    queryFn: () => FeatureFlagService.getOne(id),

    enabled: enabled && !!id,

    staleTime: 1000 * 60 * 5,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateFeatureFlag() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof FeatureFlagService.create>[0]) =>
      FeatureFlagService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: featureFlagQueryKeys.list(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateFeatureFlag() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof FeatureFlagService.update>[1];
    }) => FeatureFlagService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: featureFlagQueryKeys.list(),
        }),

        queryClient.invalidateQueries({
          queryKey: featureFlagQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteFeatureFlag() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => FeatureFlagService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: featureFlagQueryKeys.list(),
        }),

        queryClient.removeQueries({
          queryKey: featureFlagQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
