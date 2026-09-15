"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { RouteTypeService } from "@/services/catalog/route-type/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// QUERY KEYS
// ======================================================

export const routeTypeQueryKeys = {
  all: ["route-type"] as const,

  lists: () => [...routeTypeQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...routeTypeQueryKeys.lists(), { page, limit }] as const,

  details: () => [...routeTypeQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...routeTypeQueryKeys.details(), id] as const,
};

// ======================================================
// FIND ALL
// ======================================================

export function useRouteTypes(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: routeTypeQueryKeys.list(page, limit),

    queryFn: () =>
      RouteTypeService.getMany({
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

export function useRouteType(id: string, enabled = true) {
  return useQuery({
    queryKey: routeTypeQueryKeys.detail(id),

    queryFn: () => RouteTypeService.getOne(id),

    enabled: enabled && Boolean(id),

    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// CREATE
// ======================================================

export function useCreateRouteType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof RouteTypeService.create>[0]) =>
      RouteTypeService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: routeTypeQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// UPDATE
// ======================================================

export function useUpdateRouteType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof RouteTypeService.update>[1];
    }) => RouteTypeService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: routeTypeQueryKeys.lists(),
        }),

        queryClient.invalidateQueries({
          queryKey: routeTypeQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// DELETE
// ======================================================

export function useDeleteRouteType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => RouteTypeService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: routeTypeQueryKeys.lists(),
        }),

        queryClient.removeQueries({
          queryKey: routeTypeQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
