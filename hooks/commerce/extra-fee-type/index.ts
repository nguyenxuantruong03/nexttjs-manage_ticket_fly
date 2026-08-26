"use client";

import { ExtraFeeTypeService } from "@/services/commerce/extra-fee-type/client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["extra-fee-type"] as const;

export function useExtraFeeTypes() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => ExtraFeeTypeService.getMany(),
  });
}

export function useExtraFeeType(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => ExtraFeeTypeService.getOne(id),
    enabled: !!id,
  });
}

export function useCreateExtraFeeType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ExtraFeeTypeService.create,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

export function useUpdateExtraFeeType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof ExtraFeeTypeService.update>[1];
    }) => ExtraFeeTypeService.update(id, data),

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

export function useDeleteExtraFeeType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ExtraFeeTypeService.delete,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}
