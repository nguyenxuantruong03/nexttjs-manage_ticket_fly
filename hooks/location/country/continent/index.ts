"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { ContinentService } from "@/services/location/country/continent/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// QUERY KEYS
// ======================================================

export const continentQueryKeys = {
  all: ["continent"] as const,

  lists: () => [...continentQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...continentQueryKeys.lists(), { page, limit }] as const,

  details: () => [...continentQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...continentQueryKeys.details(), id] as const,
};

// ======================================================
// FIND ALL
// ======================================================

export function useContinents(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: continentQueryKeys.list(page, limit),

    queryFn: () =>
      ContinentService.getMany({
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

export function useContinent(id: string, enabled = true) {
  return useQuery({
    queryKey: continentQueryKeys.detail(id),

    queryFn: () => ContinentService.getOne(id),

    enabled: enabled && Boolean(id),

    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// CREATE
// ======================================================

export function useCreateContinent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof ContinentService.create>[0]) =>
      ContinentService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: continentQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// UPDATE
// ======================================================

export function useUpdateContinent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof ContinentService.update>[1];
    }) => ContinentService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: continentQueryKeys.lists(),
        }),

        queryClient.invalidateQueries({
          queryKey: continentQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// DELETE
// ======================================================

export function useDeleteContinent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => ContinentService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: continentQueryKeys.lists(),
        }),

        queryClient.removeQueries({
          queryKey: continentQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
