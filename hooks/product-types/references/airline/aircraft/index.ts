"use client";

import { FlyAircraftService } from "@/services/product-types/references/airline/aircraft/client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["fly-aircraft"] as const;

export function useFlyAircrafts() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => FlyAircraftService.getMany(),
  });
}

export function useFlyAircraft(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => FlyAircraftService.getOne(id),
    enabled: !!id,
  });
}

export function useCreateFlyAircraft() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: FlyAircraftService.create,
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

export function useUpdateFlyAircraft() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof FlyAircraftService.update>[1];
    }) => FlyAircraftService.update(id, data),

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

export function useDeleteFlyAircraft() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: FlyAircraftService.delete,
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}