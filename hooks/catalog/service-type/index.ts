"use client";

import { ServiceTypeService } from "@/services/catalog/service-type/client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["service-type"] as const;

export function useServiceTypes() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => ServiceTypeService.getMany(),
  });
}

export function useServiceType(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => ServiceTypeService.getOne(id),
    enabled: !!id,
  });
}

export function useCreateServiceType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ServiceTypeService.create,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

export function useUpdateServiceType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof ServiceTypeService.update>[1];
    }) => ServiceTypeService.update(id, data),

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

export function useDeleteServiceType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ServiceTypeService.delete,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}