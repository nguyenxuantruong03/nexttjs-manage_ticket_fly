"use client";

import { FlyFareRuleTypeService } from "@/services/product-types/ticket-fly/fare-rule-type/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["fly-fare-rule-type"] as const;

export function useFlyFareRuleTypes() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => FlyFareRuleTypeService.getMany(),
  });
}

export function useFlyFareRuleType(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => FlyFareRuleTypeService.getOne(id),
    enabled: !!id,
  });
}

export function useCreateFlyFareRuleType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: FlyFareRuleTypeService.create,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

export function useUpdateFlyFareRuleType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof FlyFareRuleTypeService.update>[1];
    }) => FlyFareRuleTypeService.update(id, data),

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

export function useDeleteFlyFareRuleType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: FlyFareRuleTypeService.delete,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}
