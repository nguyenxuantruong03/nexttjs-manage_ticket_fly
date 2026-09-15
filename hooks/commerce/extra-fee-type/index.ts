"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { ExtraFeeTypeService } from "@/services/commerce/extra-fee-type/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// QUERY KEYS
// ======================================================

export const extraFeeTypeQueryKeys = {
  all: ["extra-fee-type"] as const,

  lists: () => [...extraFeeTypeQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...extraFeeTypeQueryKeys.lists(), { page, limit }] as const,

  details: () => [...extraFeeTypeQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...extraFeeTypeQueryKeys.details(), id] as const,
};

// ======================================================
// FIND ALL
// ======================================================

export function useExtraFeeTypes(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: extraFeeTypeQueryKeys.list(page, limit),

    queryFn: () =>
      ExtraFeeTypeService.getMany({
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

export function useExtraFeeType(id: string, enabled = true) {
  return useQuery({
    queryKey: extraFeeTypeQueryKeys.detail(id),

    queryFn: () => ExtraFeeTypeService.getOne(id),

    enabled: enabled && Boolean(id),

    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// CREATE
// ======================================================

export function useCreateExtraFeeType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof ExtraFeeTypeService.create>[0]) =>
      ExtraFeeTypeService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: extraFeeTypeQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// UPDATE
// ======================================================

export function useUpdateExtraFeeType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof ExtraFeeTypeService.update>[1];
    }) => ExtraFeeTypeService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: extraFeeTypeQueryKeys.lists(),
        }),

        queryClient.invalidateQueries({
          queryKey: extraFeeTypeQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// DELETE
// ======================================================

export function useDeleteExtraFeeType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => ExtraFeeTypeService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: extraFeeTypeQueryKeys.lists(),
        }),

        queryClient.removeQueries({
          queryKey: extraFeeTypeQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
