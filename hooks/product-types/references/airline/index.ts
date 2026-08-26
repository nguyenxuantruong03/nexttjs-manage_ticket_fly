"use client";

import { FlyAirlineService } from "@/services/product-types/references/airline/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["fly-airline"] as const;

export function useFlyAirlines() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => FlyAirlineService.getMany(),
  });
}

export function useFlyAirline(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => FlyAirlineService.getOne(id),
    enabled: !!id,
  });
}

export function useCreateFlyAirline() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: FlyAirlineService.create,
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

export function useUpdateFlyAirline() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof FlyAirlineService.update>[1];
    }) => FlyAirlineService.update(id, data),

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

export function useDeleteFlyAirline() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: FlyAirlineService.delete,
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}
