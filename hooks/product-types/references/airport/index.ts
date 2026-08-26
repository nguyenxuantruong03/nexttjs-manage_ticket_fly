"use client";
import { FlyAirportService } from "@/services/product-types/references/airport/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["fly-airport"] as const;

export function useFliesAirport() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => FlyAirportService.getMany(),
  });
}

export function useFlyAirport(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => FlyAirportService.getOne(id),
    enabled: !!id,
  });
}

export function useCreateFlyAirport() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: FlyAirportService.create,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

export function useUpdateFlyAirport() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof FlyAirportService.update>[1];
    }) => FlyAirportService.update(id, data),

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

export function useDeleteFlyAirport() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: FlyAirportService.delete,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}
