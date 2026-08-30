"use client";

import { AirportTransferService } from "@/services/product-types/airport-transfer/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ======================================================
// Query Keys
// ======================================================

export const airportTransferQueryKeys = {
  all: ["airport-transfer"] as const,
  list: () => [...airportTransferQueryKeys.all, "list"] as const,
  detail: (id: string) =>
    [...airportTransferQueryKeys.all, "detail", id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useAirportTransfers(enabled = true) {
  return useQuery({
    queryKey: airportTransferQueryKeys.list(),
    queryFn: () => AirportTransferService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useAirportTransfer(id: string, enabled = true) {
  return useQuery({
    queryKey: airportTransferQueryKeys.detail(id),
    queryFn: () => AirportTransferService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateAirportTransfer() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof AirportTransferService.create>[0]) =>
      AirportTransferService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: airportTransferQueryKeys.list(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

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

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: airportTransferQueryKeys.list(),
        }),
        queryClient.invalidateQueries({
          queryKey: airportTransferQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteAirportTransfer() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => AirportTransferService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: airportTransferQueryKeys.list(),
        }),
        queryClient.removeQueries({
          queryKey: airportTransferQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
