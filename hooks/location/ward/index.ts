"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { WardService } from "@/services/location/ward/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// QUERY KEYS
// ======================================================

export const wardQueryKeys = {
  all: ["ward"] as const,

  lists: () => [...wardQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...wardQueryKeys.lists(), { page, limit }] as const,

  details: () => [...wardQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...wardQueryKeys.details(), id] as const,
};

// ======================================================
// FIND ALL
// ======================================================

export function useWards(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: wardQueryKeys.list(page, limit),

    queryFn: () =>
      WardService.getMany({
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

export function useWard(id: string, enabled = true) {
  return useQuery({
    queryKey: wardQueryKeys.detail(id),

    queryFn: () => WardService.getOne(id),

    enabled: enabled && Boolean(id),

    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// CREATE
// ======================================================

export function useCreateWard() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof WardService.create>[0]) =>
      WardService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: wardQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// UPDATE
// ======================================================

export function useUpdateWard() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof WardService.update>[1];
    }) => WardService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: wardQueryKeys.lists(),
        }),

        queryClient.invalidateQueries({
          queryKey: wardQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// DELETE
// ======================================================

export function useDeleteWard() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => WardService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: wardQueryKeys.lists(),
        }),

        queryClient.removeQueries({
          queryKey: wardQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
