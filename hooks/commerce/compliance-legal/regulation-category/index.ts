"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { RegulationCategoryService } from "@/services/commerce/compliance-legal/regulation-category/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// QUERY KEYS
// ======================================================

export const regulationCategoryQueryKeys = {
  all: ["regulation-category"] as const,

  lists: () => [...regulationCategoryQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...regulationCategoryQueryKeys.lists(), { page, limit }] as const,

  details: () => [...regulationCategoryQueryKeys.all, "detail"] as const,

  detail: (id: string) =>
    [...regulationCategoryQueryKeys.details(), id] as const,
};

// ======================================================
// FIND ALL
// ======================================================

export function useRegulationCategories(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: regulationCategoryQueryKeys.list(page, limit),

    queryFn: () =>
      RegulationCategoryService.getMany({
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

export function useRegulationCategory(id: string, enabled = true) {
  return useQuery({
    queryKey: regulationCategoryQueryKeys.detail(id),

    queryFn: () => RegulationCategoryService.getOne(id),

    enabled: enabled && Boolean(id),

    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// CREATE
// ======================================================

export function useCreateRegulationCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (
      data: Parameters<typeof RegulationCategoryService.create>[0],
    ) => RegulationCategoryService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: regulationCategoryQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// UPDATE
// ======================================================

export function useUpdateRegulationCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof RegulationCategoryService.update>[1];
    }) => RegulationCategoryService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: regulationCategoryQueryKeys.lists(),
        }),

        queryClient.invalidateQueries({
          queryKey: regulationCategoryQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// DELETE
// ======================================================

export function useDeleteRegulationCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => RegulationCategoryService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: regulationCategoryQueryKeys.lists(),
        }),

        queryClient.removeQueries({
          queryKey: regulationCategoryQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
