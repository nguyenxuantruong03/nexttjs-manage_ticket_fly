"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { RegulationService } from "@/services/commerce/compliance-legal/regulation/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// QUERY KEYS
// ======================================================

export const regulationQueryKeys = {
  all: ["regulation"] as const,

  lists: () => [...regulationQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...regulationQueryKeys.lists(), { page, limit }] as const,

  details: () => [...regulationQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...regulationQueryKeys.details(), id] as const,
};

// ======================================================
// FIND ALL
// ======================================================

export function useRegulations(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: regulationQueryKeys.list(page, limit),

    queryFn: () =>
      RegulationService.getMany({
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

export function useRegulation(id: string, enabled = true) {
  return useQuery({
    queryKey: regulationQueryKeys.detail(id),

    queryFn: () => RegulationService.getOne(id),

    enabled: enabled && Boolean(id),

    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// CREATE
// ======================================================

export function useCreateRegulation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof RegulationService.create>[0]) =>
      RegulationService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: regulationQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// UPDATE
// ======================================================

export function useUpdateRegulation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof RegulationService.update>[1];
    }) => RegulationService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: regulationQueryKeys.lists(),
        }),

        queryClient.invalidateQueries({
          queryKey: regulationQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// DELETE
// ======================================================

export function useDeleteRegulation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => RegulationService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: regulationQueryKeys.lists(),
        }),

        queryClient.removeQueries({
          queryKey: regulationQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
