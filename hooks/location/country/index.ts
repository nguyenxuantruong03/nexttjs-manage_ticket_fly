"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { CountryService } from "@/services/location/country/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// QUERY KEYS
// ======================================================

export const countryQueryKeys = {
  all: ["country"] as const,

  lists: () => [...countryQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...countryQueryKeys.lists(), { page, limit }] as const,

  details: () => [...countryQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...countryQueryKeys.details(), id] as const,
};

// ======================================================
// FIND ALL
// ======================================================

export function useCountries(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: countryQueryKeys.list(page, limit),

    queryFn: () =>
      CountryService.getMany({
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

export function useCountry(id: string, enabled = true) {
  return useQuery({
    queryKey: countryQueryKeys.detail(id),

    queryFn: () => CountryService.getOne(id),

    enabled: enabled && Boolean(id),

    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// CREATE
// ======================================================

export function useCreateCountry() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof CountryService.create>[0]) =>
      CountryService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: countryQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// UPDATE
// ======================================================

export function useUpdateCountry() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof CountryService.update>[1];
    }) => CountryService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: countryQueryKeys.lists(),
        }),

        queryClient.invalidateQueries({
          queryKey: countryQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// DELETE
// ======================================================

export function useDeleteCountry() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => CountryService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: countryQueryKeys.lists(),
        }),

        queryClient.removeQueries({
          queryKey: countryQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
