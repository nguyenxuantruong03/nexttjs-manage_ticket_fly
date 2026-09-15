"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { FlyCrewService } from "@/services/product-types/references/airline/crew/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// Query Keys
// ======================================================

export const flyCrewQueryKeys = {
  all: ["fly-crew"] as const,

  lists: () => [...flyCrewQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...flyCrewQueryKeys.lists(), { page, limit }] as const,

  details: () => [...flyCrewQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...flyCrewQueryKeys.details(), id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useFlyCrews(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: flyCrewQueryKeys.list(page, limit),
    queryFn: () =>
      FlyCrewService.getMany({
        page,
        limit,
      }),
    enabled,
    staleTime: DEFAULT_QUERY_STALE_TIME,
    placeholderData: keepPreviousData,
  });
}

export function useFlyCrew(id: string, enabled = true) {
  return useQuery({
    queryKey: flyCrewQueryKeys.detail(id),
    queryFn: () => FlyCrewService.getOne(id),
    enabled: enabled && Boolean(id),
    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateFlyCrew() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof FlyCrewService.create>[0]) =>
      FlyCrewService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: flyCrewQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateFlyCrew() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof FlyCrewService.update>[1];
    }) => FlyCrewService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: flyCrewQueryKeys.lists(),
        }),
        queryClient.invalidateQueries({
          queryKey: flyCrewQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteFlyCrew() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => FlyCrewService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: flyCrewQueryKeys.lists(),
        }),
        queryClient.removeQueries({
          queryKey: flyCrewQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
