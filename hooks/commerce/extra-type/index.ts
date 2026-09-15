"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { ExtraTypeService } from "@/services/commerce/extra-type/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// QUERY KEYS
// ======================================================

export const extraTypeQueryKeys = {
  all: ["extra-type"] as const,

  lists: () => [...extraTypeQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...extraTypeQueryKeys.lists(), { page, limit }] as const,

  details: () => [...extraTypeQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...extraTypeQueryKeys.details(), id] as const,
};

// ======================================================
// FIND ALL
// ======================================================

export function useExtraTypes(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: extraTypeQueryKeys.list(page, limit),

    queryFn: () =>
      ExtraTypeService.getMany({
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

export function useExtraType(id: string, enabled = true) {
  return useQuery({
    queryKey: extraTypeQueryKeys.detail(id),

    queryFn: () => ExtraTypeService.getOne(id),

    enabled: enabled && Boolean(id),

    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// CREATE
// ======================================================

export function useCreateExtraType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof ExtraTypeService.create>[0]) =>
      ExtraTypeService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: extraTypeQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// UPDATE
// ======================================================

export function useUpdateExtraType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof ExtraTypeService.update>[1];
    }) => ExtraTypeService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: extraTypeQueryKeys.lists(),
        }),

        queryClient.invalidateQueries({
          queryKey: extraTypeQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// DELETE
// ======================================================

export function useDeleteExtraType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => ExtraTypeService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: extraTypeQueryKeys.lists(),
        }),

        queryClient.removeQueries({
          queryKey: extraTypeQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
