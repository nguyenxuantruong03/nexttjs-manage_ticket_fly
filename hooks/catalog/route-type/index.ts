"use client";

import { RouteTypeService } from "@/services/catalog/route-type/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ======================================================
// Query Keys
// ======================================================

export const routeTypeQueryKeys = {
  all: ["route-type"] as const,
  list: () => [...routeTypeQueryKeys.all, "list"] as const,
  detail: (id: string) => [...routeTypeQueryKeys.all, "detail", id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useRouteTypes(enabled = true) {
  return useQuery({
    queryKey: routeTypeQueryKeys.list(),
    queryFn: () => RouteTypeService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useRouteType(id: string, enabled = true) {
  return useQuery({
    queryKey: routeTypeQueryKeys.detail(id),
    queryFn: () => RouteTypeService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateRouteType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof RouteTypeService.create>[0]) =>
      RouteTypeService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: routeTypeQueryKeys.list(),
      });
    },
  });
}

// ======================================================
// Update
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
        queryClient.invalidateQueries({ queryKey: routeTypeQueryKeys.list() }),
        queryClient.invalidateQueries({
          queryKey: routeTypeQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteRouteType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => RouteTypeService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: routeTypeQueryKeys.list() }),
        queryClient.removeQueries({ queryKey: routeTypeQueryKeys.detail(id) }),
      ]);
    },
  });
}