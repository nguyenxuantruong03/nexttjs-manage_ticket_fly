"use client";

import { ExtraTypeService } from "@/services/commerce/extra-type/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["extra-type"] as const;

export function useExtraTypes() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => ExtraTypeService.getMany(),
  });
}

export function useExtraType(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => ExtraTypeService.getOne(id),
    enabled: !!id,
  });
}

export function useCreateExtraType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ExtraTypeService.create,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

export function useUpdateExtraType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof ExtraTypeService.update>[1];
    }) => ExtraTypeService.update(id, data),

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

export function useDeleteExtraType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ExtraTypeService.delete,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}
