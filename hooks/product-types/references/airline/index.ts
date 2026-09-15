"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { FlyAirlineService } from "@/services/product-types/references/airline/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// Query Keys
// ======================================================

export const flyAirlineQueryKeys = {
  all: ["fly-airline"] as const,

  lists: () => [...flyAirlineQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...flyAirlineQueryKeys.lists(), { page, limit }] as const,

  details: () => [...flyAirlineQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...flyAirlineQueryKeys.details(), id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useFlyAirlines(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: flyAirlineQueryKeys.list(page, limit),
    queryFn: () =>
      FlyAirlineService.getMany({
        page,
        limit,
      }),
    enabled,
    staleTime: DEFAULT_QUERY_STALE_TIME,
    placeholderData: keepPreviousData,
  });
}

export function useFlyAirline(id: string, enabled = true) {
  return useQuery({
    queryKey: flyAirlineQueryKeys.detail(id),
    queryFn: () => FlyAirlineService.getOne(id),
    enabled: enabled && Boolean(id),
    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateFlyAirline() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof FlyAirlineService.create>[0]) =>
      FlyAirlineService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: flyAirlineQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateFlyAirline() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof FlyAirlineService.update>[1];
    }) => FlyAirlineService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: flyAirlineQueryKeys.lists(),
        }),
        queryClient.invalidateQueries({
          queryKey: flyAirlineQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteFlyAirline() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => FlyAirlineService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: flyAirlineQueryKeys.lists(),
        }),
        queryClient.removeQueries({
          queryKey: flyAirlineQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
