"use client";

import { YachtConditionService } from "@/services/product-types/yacht/condition/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["yacht-condition"] as const;

export function useYachtConditions() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => YachtConditionService.getMany(),
  });
}

export function useYachtCondition(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => YachtConditionService.getOne(id),
    enabled: !!id,
  });
}

export function useCreateYachtCondition() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: YachtConditionService.create,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

export function useUpdateYachtCondition() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof YachtConditionService.update>[1];
    }) => YachtConditionService.update(id, data),

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

export function useDeleteYachtCondition() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: YachtConditionService.delete,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}