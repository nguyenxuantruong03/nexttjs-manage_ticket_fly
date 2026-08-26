"use client";

import { FuelTypeService } from "@/services/catalog/fuel-type/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["fuel-type"] as const;

export function useFuelTypes() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => FuelTypeService.getMany(),
  });
}

export function useFuelType(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => FuelTypeService.getOne(id),
    enabled: !!id,
  });
}

export function useCreateFuelType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: FuelTypeService.create,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

export function useUpdateFuelType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof FuelTypeService.update>[1];
    }) => FuelTypeService.update(id, data),

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

export function useDeleteFuelType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: FuelTypeService.delete,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}