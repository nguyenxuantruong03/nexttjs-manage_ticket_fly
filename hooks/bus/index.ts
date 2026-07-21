"use client"
import { BusService } from "@/services/bus/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["bus"] as const;

export function useBuses() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => BusService.getMany(),
  });
}

export function useBus(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => BusService.getOne(id),
    enabled: !!id,
  });
}

export function useCreateBus() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: BusService.create,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

export function useUpdateBus() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof BusService.update>[1];
    }) => BusService.update(id, data),

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

export function useDeleteBus() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: BusService.delete,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}
