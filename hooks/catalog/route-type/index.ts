"use client";

import { RouteTypeService } from "@/services/catalog/route-type/client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["route-type"] as const;

export function useRouteTypes() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => RouteTypeService.getMany(),
  });
}

export function useRouteType(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => RouteTypeService.getOne(id),
    enabled: !!id,
  });
}

export function useCreateRouteType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: RouteTypeService.create,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

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

    onSuccess(_, variables) {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });

      queryClient.invalidateQueries({
        queryKey: [...QUERY_KEY, variables.id],
      });
    },
  });
}

export function useDeleteRouteType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: RouteTypeService.delete,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}
