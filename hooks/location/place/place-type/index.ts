"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { PlaceTypeService } from "@/services/location/place/place-type/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// QUERY KEYS
// ======================================================

export const placeTypeQueryKeys = {
  all: ["place-type"] as const,

  lists: () => [...placeTypeQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...placeTypeQueryKeys.lists(), { page, limit }] as const,

  details: () => [...placeTypeQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...placeTypeQueryKeys.details(), id] as const,
};

// ======================================================
// FIND ALL
// ======================================================

export function usePlaceTypes(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: placeTypeQueryKeys.list(page, limit),

    queryFn: () =>
      PlaceTypeService.getMany({
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

export function usePlaceType(id: string, enabled = true) {
  return useQuery({
    queryKey: placeTypeQueryKeys.detail(id),

    queryFn: () => PlaceTypeService.getOne(id),

    enabled: enabled && Boolean(id),

    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// CREATE
// ======================================================

export function useCreatePlaceType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof PlaceTypeService.create>[0]) =>
      PlaceTypeService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: placeTypeQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// UPDATE
// ======================================================

export function useUpdatePlaceType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof PlaceTypeService.update>[1];
    }) => PlaceTypeService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: placeTypeQueryKeys.lists(),
        }),

        queryClient.invalidateQueries({
          queryKey: placeTypeQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// DELETE
// ======================================================

export function useDeletePlaceType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => PlaceTypeService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: placeTypeQueryKeys.lists(),
        }),

        queryClient.removeQueries({
          queryKey: placeTypeQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
