"use client";

import { ExtraService } from "@/services/commerce/extra/client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["extra"] as const;

export function useExtras() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => ExtraService.getMany(),
  });
}

export function useExtra(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => ExtraService.getOne(id),
    enabled: !!id,
  });
}

export function useCreateExtra() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ExtraService.create,
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

export function useUpdateExtra() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof ExtraService.update>[1];
    }) => ExtraService.update(id, data),

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

export function useDeleteExtra() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ExtraService.delete,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}
