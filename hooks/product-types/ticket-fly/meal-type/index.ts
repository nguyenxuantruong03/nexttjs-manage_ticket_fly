"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { FlyMealTypeService } from "@/services/product-types/ticket-fly/meal-type/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// Query Keys
// ======================================================

export const flyMealTypeQueryKeys = {
  all: ["fly-meal-type"] as const,

  lists: () => [...flyMealTypeQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...flyMealTypeQueryKeys.lists(), { page, limit }] as const,

  details: () => [...flyMealTypeQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...flyMealTypeQueryKeys.details(), id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useFlyMealTypes(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: flyMealTypeQueryKeys.list(page, limit),
    queryFn: () =>
      FlyMealTypeService.getMany({
        page,
        limit,
      }),
    enabled,
    staleTime: DEFAULT_QUERY_STALE_TIME,
    placeholderData: keepPreviousData,
  });
}

export function useFlyMealType(id: string, enabled = true) {
  return useQuery({
    queryKey: flyMealTypeQueryKeys.detail(id),
    queryFn: () => FlyMealTypeService.getOne(id),
    enabled: enabled && Boolean(id),
    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateFlyMealType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof FlyMealTypeService.create>[0]) =>
      FlyMealTypeService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: flyMealTypeQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateFlyMealType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof FlyMealTypeService.update>[1];
    }) => FlyMealTypeService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: flyMealTypeQueryKeys.lists(),
        }),
        queryClient.invalidateQueries({
          queryKey: flyMealTypeQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteFlyMealType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => FlyMealTypeService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: flyMealTypeQueryKeys.lists(),
        }),
        queryClient.removeQueries({
          queryKey: flyMealTypeQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
