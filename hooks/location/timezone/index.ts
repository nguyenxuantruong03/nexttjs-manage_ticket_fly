"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { TimezoneService } from "@/services/location/timezone/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// QUERY KEYS
// ======================================================

export const timezoneQueryKeys = {
  all: ["timezone"] as const,

  lists: () => [...timezoneQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...timezoneQueryKeys.lists(), { page, limit }] as const,

  details: () => [...timezoneQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...timezoneQueryKeys.details(), id] as const,
};

// ======================================================
// FIND ALL
// ======================================================

export function useTimezones(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: timezoneQueryKeys.list(page, limit),

    queryFn: () =>
      TimezoneService.getMany({
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

export function useTimezone(id: string, enabled = true) {
  return useQuery({
    queryKey: timezoneQueryKeys.detail(id),

    queryFn: () => TimezoneService.getOne(id),

    enabled: enabled && Boolean(id),

    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// CREATE
// ======================================================

export function useCreateTimezone() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof TimezoneService.create>[0]) =>
      TimezoneService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: timezoneQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// UPDATE
// ======================================================

export function useUpdateTimezone() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof TimezoneService.update>[1];
    }) => TimezoneService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: timezoneQueryKeys.lists(),
        }),

        queryClient.invalidateQueries({
          queryKey: timezoneQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// DELETE
// ======================================================

export function useDeleteTimezone() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => TimezoneService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: timezoneQueryKeys.lists(),
        }),

        queryClient.removeQueries({
          queryKey: timezoneQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
