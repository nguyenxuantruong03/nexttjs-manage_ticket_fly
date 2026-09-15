"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { FlyAircraftService } from "@/services/product-types/references/airline/aircraft/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// Query Keys
// ======================================================

export const flyAircraftQueryKeys = {
  all: ["fly-aircraft"] as const,

  lists: () => [...flyAircraftQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...flyAircraftQueryKeys.lists(), { page, limit }] as const,

  details: () => [...flyAircraftQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...flyAircraftQueryKeys.details(), id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useFlyAircrafts(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: flyAircraftQueryKeys.list(page, limit),
    queryFn: () =>
      FlyAircraftService.getMany({
        page,
        limit,
      }),
    enabled,
    staleTime: DEFAULT_QUERY_STALE_TIME,
    placeholderData: keepPreviousData,
  });
}

export function useFlyAircraft(id: string, enabled = true) {
  return useQuery({
    queryKey: flyAircraftQueryKeys.detail(id),
    queryFn: () => FlyAircraftService.getOne(id),
    enabled: enabled && Boolean(id),
    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateFlyAircraft() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof FlyAircraftService.create>[0]) =>
      FlyAircraftService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: flyAircraftQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateFlyAircraft() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof FlyAircraftService.update>[1];
    }) => FlyAircraftService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: flyAircraftQueryKeys.lists(),
        }),
        queryClient.invalidateQueries({
          queryKey: flyAircraftQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteFlyAircraft() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => FlyAircraftService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: flyAircraftQueryKeys.lists(),
        }),
        queryClient.removeQueries({
          queryKey: flyAircraftQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
