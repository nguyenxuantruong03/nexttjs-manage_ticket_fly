"use client";

import { FlyMealTypeService } from "@/services/product-types/ticket-fly/meal-type/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["fly-meal-type"] as const;

export function useFlyMealTypes() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => FlyMealTypeService.getMany(),
  });
}

export function useFlyMealType(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => FlyMealTypeService.getOne(id),
    enabled: !!id,
  });
}

export function useCreateFlyMealType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: FlyMealTypeService.create,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

export function useUpdateFlyMealType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof FlyMealTypeService.update>[1];
    }) => FlyMealTypeService.update(id, data),

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

export function useDeleteFlyMealType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: FlyMealTypeService.delete,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}
