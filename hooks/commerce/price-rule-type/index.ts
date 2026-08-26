"use client";

import { PriceRuleTypeService } from "@/services/commerce/price-rule-type/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["price-rule-type"] as const;

export function usePriceRuleTypes() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => PriceRuleTypeService.getMany(),
  });
}

export function usePriceRuleType(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => PriceRuleTypeService.getOne(id),
    enabled: !!id,
  });
}

export function useCreatePriceRuleType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: PriceRuleTypeService.create,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

export function useUpdatePriceRuleType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof PriceRuleTypeService.update>[1];
    }) => PriceRuleTypeService.update(id, data),

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

export function useDeletePriceRuleType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: PriceRuleTypeService.delete,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}
