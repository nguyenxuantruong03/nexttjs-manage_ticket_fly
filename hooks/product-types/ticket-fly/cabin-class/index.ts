"use client";

import { FlyCabinClassService } from "@/services/product-types/ticket-fly/cabin-class/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["fly-cabin-class"] as const;


export function useFlyCabinClasses() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => FlyCabinClassService.getMany(),
  });
}


export function useFlyCabinClass(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => FlyCabinClassService.getOne(id),
    enabled: !!id,
  });
}


export function useCreateFlyCabinClass() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: FlyCabinClassService.create,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}


export function useUpdateFlyCabinClass() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof FlyCabinClassService.update>[1];
    }) =>
      FlyCabinClassService.update(id, data),

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


export function useDeleteFlyCabinClass() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: FlyCabinClassService.delete,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}