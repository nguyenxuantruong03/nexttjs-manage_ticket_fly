"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { PackageService } from "@/services/commerce/package/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// QUERY KEYS
// ======================================================

export const packageQueryKeys = {
  all: ["package"] as const,

  lists: () => [...packageQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...packageQueryKeys.lists(), { page, limit }] as const,

  details: () => [...packageQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...packageQueryKeys.details(), id] as const,
};

// ======================================================
// FIND ALL
// ======================================================

export function usePackages(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: packageQueryKeys.list(page, limit),

    queryFn: () =>
      PackageService.getMany({
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

export function usePackage(id: string, enabled = true) {
  return useQuery({
    queryKey: packageQueryKeys.detail(id),

    queryFn: () => PackageService.getOne(id),

    enabled: enabled && Boolean(id),

    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// CREATE
// ======================================================

export function useCreatePackage() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof PackageService.create>[0]) =>
      PackageService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: packageQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// UPDATE
// ======================================================

export function useUpdatePackage() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof PackageService.update>[1];
    }) => PackageService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: packageQueryKeys.lists(),
        }),

        queryClient.invalidateQueries({
          queryKey: packageQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// DELETE
// ======================================================

export function useDeletePackage() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => PackageService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: packageQueryKeys.lists(),
        }),

        queryClient.removeQueries({
          queryKey: packageQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
