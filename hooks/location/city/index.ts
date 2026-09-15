"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { CityService } from "@/services/location/city/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// QUERY KEYS
// ======================================================

export const cityQueryKeys = {
  all: ["city"] as const,

  lists: () => [...cityQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...cityQueryKeys.lists(), { page, limit }] as const,

  details: () => [...cityQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...cityQueryKeys.details(), id] as const,
};

// ======================================================
// FIND ALL
// ======================================================

export function useCities(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: cityQueryKeys.list(page, limit),

    queryFn: () =>
      CityService.getMany({
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

export function useCity(id: string, enabled = true) {
  return useQuery({
    queryKey: cityQueryKeys.detail(id),

    queryFn: () => CityService.getOne(id),

    enabled: enabled && Boolean(id),

    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// CREATE
// ======================================================

export function useCreateCity() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof CityService.create>[0]) =>
      CityService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: cityQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// UPDATE
// ======================================================

export function useUpdateCity() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof CityService.update>[1];
    }) => CityService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: cityQueryKeys.lists(),
        }),

        queryClient.invalidateQueries({
          queryKey: cityQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// DELETE
// ======================================================

export function useDeleteCity() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => CityService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: cityQueryKeys.lists(),
        }),

        queryClient.removeQueries({
          queryKey: cityQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
