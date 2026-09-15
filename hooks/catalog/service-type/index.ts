"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { ServiceTypeService } from "@/services/catalog/service-type/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// QUERY KEYS
// ======================================================

export const serviceTypeQueryKeys = {
  all: ["service-type"] as const,

  lists: () => [...serviceTypeQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...serviceTypeQueryKeys.lists(), { page, limit }] as const,

  details: () => [...serviceTypeQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...serviceTypeQueryKeys.details(), id] as const,
};

// ======================================================
// FIND ALL
// ======================================================

export function useServiceTypes(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: serviceTypeQueryKeys.list(page, limit),

    queryFn: () =>
      ServiceTypeService.getMany({
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

export function useServiceType(id: string, enabled = true) {
  return useQuery({
    queryKey: serviceTypeQueryKeys.detail(id),

    queryFn: () => ServiceTypeService.getOne(id),

    enabled: enabled && Boolean(id),

    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// CREATE
// ======================================================

export function useCreateServiceType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof ServiceTypeService.create>[0]) =>
      ServiceTypeService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: serviceTypeQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// UPDATE
// ======================================================

export function useUpdateServiceType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof ServiceTypeService.update>[1];
    }) => ServiceTypeService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: serviceTypeQueryKeys.lists(),
        }),

        queryClient.invalidateQueries({
          queryKey: serviceTypeQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// DELETE
// ======================================================

export function useDeleteServiceType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => ServiceTypeService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: serviceTypeQueryKeys.lists(),
        }),

        queryClient.removeQueries({
          queryKey: serviceTypeQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
