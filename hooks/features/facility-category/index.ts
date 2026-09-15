"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { FacilityCategoryService } from "@/services/features/facility-category/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// QUERY KEYS
// ======================================================

export const facilityCategoryQueryKeys = {
  all: ["facility-category"] as const,

  lists: () => [...facilityCategoryQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...facilityCategoryQueryKeys.lists(), { page, limit }] as const,

  details: () => [...facilityCategoryQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...facilityCategoryQueryKeys.details(), id] as const,
};

// ======================================================
// FIND ALL
// ======================================================

export function useFacilityCategories(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: facilityCategoryQueryKeys.list(page, limit),

    queryFn: () =>
      FacilityCategoryService.getMany({
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

export function useFacilityCategory(id: string, enabled = true) {
  return useQuery({
    queryKey: facilityCategoryQueryKeys.detail(id),

    queryFn: () => FacilityCategoryService.getOne(id),

    enabled: enabled && Boolean(id),

    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// CREATE
// ======================================================

export function useCreateFacilityCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof FacilityCategoryService.create>[0]) =>
      FacilityCategoryService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: facilityCategoryQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// UPDATE
// ======================================================

export function useUpdateFacilityCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof FacilityCategoryService.update>[1];
    }) => FacilityCategoryService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: facilityCategoryQueryKeys.lists(),
        }),

        queryClient.invalidateQueries({
          queryKey: facilityCategoryQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// DELETE
// ======================================================

export function useDeleteFacilityCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => FacilityCategoryService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: facilityCategoryQueryKeys.lists(),
        }),

        queryClient.removeQueries({
          queryKey: facilityCategoryQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
