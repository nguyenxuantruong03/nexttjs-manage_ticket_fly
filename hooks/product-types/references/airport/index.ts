"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { FlyAirportService } from "@/services/product-types/references/airport/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// Query Keys
// ======================================================

export const flyAirportQueryKeys = {
  all: ["fly-airport"] as const,

  lists: () => [...flyAirportQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...flyAirportQueryKeys.lists(), { page, limit }] as const,

  details: () => [...flyAirportQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...flyAirportQueryKeys.details(), id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useFliesAirport(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: flyAirportQueryKeys.list(page, limit),
    queryFn: () =>
      FlyAirportService.getMany({
        page,
        limit,
      }),
    enabled,
    staleTime: DEFAULT_QUERY_STALE_TIME,
    placeholderData: keepPreviousData,
  });
}

export function useFlyAirport(id: string, enabled = true) {
  return useQuery({
    queryKey: flyAirportQueryKeys.detail(id),
    queryFn: () => FlyAirportService.getOne(id),
    enabled: enabled && Boolean(id),
    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateFlyAirport() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof FlyAirportService.create>[0]) =>
      FlyAirportService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: flyAirportQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateFlyAirport() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof FlyAirportService.update>[1];
    }) => FlyAirportService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: flyAirportQueryKeys.lists(),
        }),
        queryClient.invalidateQueries({
          queryKey: flyAirportQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteFlyAirport() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => FlyAirportService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: flyAirportQueryKeys.lists(),
        }),
        queryClient.removeQueries({
          queryKey: flyAirportQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
