"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { PlaceService } from "@/services/location/place/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// QUERY KEYS
// ======================================================

export const placeQueryKeys = {
  all: ["place"] as const,

  lists: () => [...placeQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...placeQueryKeys.lists(), { page, limit }] as const,

  details: () => [...placeQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...placeQueryKeys.details(), id] as const,
};

// ======================================================
// FIND ALL
// ======================================================

export function usePlaces(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: placeQueryKeys.list(page, limit),

    queryFn: () =>
      PlaceService.getMany({
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

export function usePlace(id: string, enabled = true) {
  return useQuery({
    queryKey: placeQueryKeys.detail(id),

    queryFn: () => PlaceService.getOne(id),

    enabled: enabled && Boolean(id),

    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// CREATE
// ======================================================

export function useCreatePlace() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof PlaceService.create>[0]) =>
      PlaceService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: placeQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// UPDATE
// ======================================================

export function useUpdatePlace() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof PlaceService.update>[1];
    }) => PlaceService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: placeQueryKeys.lists(),
        }),

        queryClient.invalidateQueries({
          queryKey: placeQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// DELETE
// ======================================================

export function useDeletePlace() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => PlaceService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: placeQueryKeys.lists(),
        }),

        queryClient.removeQueries({
          queryKey: placeQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
