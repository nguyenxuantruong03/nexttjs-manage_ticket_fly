"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { FlyAircraftTypeService } from "@/services/product-types/references/airline/aircraft/aircraft-type/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// Query Keys
// ======================================================

export const flyAircraftTypeQueryKeys = {
  all: ["fly-aircraft-type"] as const,

  lists: () => [...flyAircraftTypeQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...flyAircraftTypeQueryKeys.lists(), { page, limit }] as const,

  details: () => [...flyAircraftTypeQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...flyAircraftTypeQueryKeys.details(), id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useFlyAircraftTypes(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: flyAircraftTypeQueryKeys.list(page, limit),
    queryFn: () =>
      FlyAircraftTypeService.getMany({
        page,
        limit,
      }),
    enabled,
    staleTime: DEFAULT_QUERY_STALE_TIME,
    placeholderData: keepPreviousData,
  });
}

export function useFlyAircraftType(id: string, enabled = true) {
  return useQuery({
    queryKey: flyAircraftTypeQueryKeys.detail(id),
    queryFn: () => FlyAircraftTypeService.getOne(id),
    enabled: enabled && Boolean(id),
    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateFlyAircraftType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof FlyAircraftTypeService.create>[0]) =>
      FlyAircraftTypeService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: flyAircraftTypeQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateFlyAircraftType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof FlyAircraftTypeService.update>[1];
    }) => FlyAircraftTypeService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: flyAircraftTypeQueryKeys.lists(),
        }),
        queryClient.invalidateQueries({
          queryKey: flyAircraftTypeQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteFlyAircraftType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => FlyAircraftTypeService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: flyAircraftTypeQueryKeys.lists(),
        }),
        queryClient.removeQueries({
          queryKey: flyAircraftTypeQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
