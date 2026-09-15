"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { FeatureFlagService } from "@/services/commerce/feature-flag/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// QUERY KEYS
// ======================================================

export const featureFlagQueryKeys = {
  all: ["feature-flag"] as const,

  lists: () => [...featureFlagQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...featureFlagQueryKeys.lists(), { page, limit }] as const,

  details: () => [...featureFlagQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...featureFlagQueryKeys.details(), id] as const,
};

// ======================================================
// FIND ALL
// ======================================================

export function useFeatureFlags(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: featureFlagQueryKeys.list(page, limit),

    queryFn: () =>
      FeatureFlagService.getMany({
        page,
        limit,
      }),

    enabled,

    staleTime: DEFAULT_QUERY_STALE_TIME,

    placeholderData: keepPreviousData,
  });
}

// ======================================================
// FIND ONE
// ======================================================

export function useFeatureFlag(id: string, enabled = true) {
  return useQuery({
    queryKey: featureFlagQueryKeys.detail(id),

    queryFn: () => FeatureFlagService.getOne(id),

    enabled: enabled && Boolean(id),

    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// CREATE
// ======================================================

export function useCreateFeatureFlag() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof FeatureFlagService.create>[0]) =>
      FeatureFlagService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: featureFlagQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// UPDATE
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
          queryKey: featureFlagQueryKeys.lists(),
        }),

        queryClient.invalidateQueries({
          queryKey: featureFlagQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// DELETE
// ======================================================

export function useDeleteFeatureFlag() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => FeatureFlagService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: featureFlagQueryKeys.lists(),
        }),

        queryClient.removeQueries({
          queryKey: featureFlagQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
