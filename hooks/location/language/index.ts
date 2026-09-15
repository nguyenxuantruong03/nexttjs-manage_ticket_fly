"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { LanguageService } from "@/services/location/language/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// QUERY KEYS
// ======================================================

export const languageQueryKeys = {
  all: ["language"] as const,

  lists: () => [...languageQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...languageQueryKeys.lists(), { page, limit }] as const,

  details: () => [...languageQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...languageQueryKeys.details(), id] as const,
};

// ======================================================
// FIND ALL
// ======================================================

export function useLanguages(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: languageQueryKeys.list(page, limit),

    queryFn: () =>
      LanguageService.getMany({
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

export function useLanguage(id: string, enabled = true) {
  return useQuery({
    queryKey: languageQueryKeys.detail(id),

    queryFn: () => LanguageService.getOne(id),

    enabled: enabled && Boolean(id),

    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// CREATE
// ======================================================

export function useCreateLanguage() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof LanguageService.create>[0]) =>
      LanguageService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: languageQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// UPDATE
// ======================================================

export function useUpdateLanguage() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof LanguageService.update>[1];
    }) => LanguageService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: languageQueryKeys.lists(),
        }),

        queryClient.invalidateQueries({
          queryKey: languageQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// DELETE
// ======================================================

export function useDeleteLanguage() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => LanguageService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: languageQueryKeys.lists(),
        }),

        queryClient.removeQueries({
          queryKey: languageQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
