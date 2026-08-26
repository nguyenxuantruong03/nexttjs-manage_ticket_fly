"use client";
import { AirportTransferService } from "@/services/product-types/airport-transfer/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["airport-transfer"] as const;

export function useAirportTransfers() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => AirportTransferService.getMany(),
  });
}

export function useAirportTransfer(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => AirportTransferService.getOne(id),
    enabled: !!id,
  });
}

export function useCreateAirportTransfer() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: AirportTransferService.create,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

export function useUpdateAirportTransfer() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof AirportTransferService.update>[1];
    }) => AirportTransferService.update(id, data),

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

export function useDeleteAirportTransfer() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: AirportTransferService.delete,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}
