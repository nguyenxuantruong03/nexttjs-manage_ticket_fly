"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { AirportTransferService } from "@/services/product-types/airport-transfer/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// Query Keys
// ======================================================

export const airportTransferQueryKeys = {
  all: ["airport-transfer"] as const,

  lists: () => [...airportTransferQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...airportTransferQueryKeys.lists(), { page, limit }] as const,

  details: () => [...airportTransferQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...airportTransferQueryKeys.details(), id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useAirportTransfers(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: airportTransferQueryKeys.list(page, limit),

    queryFn: () =>
      AirportTransferService.getMany({
        page,
        limit,
      }),

    enabled,

    staleTime: DEFAULT_QUERY_STALE_TIME,

    placeholderData: keepPreviousData,
  });
}

export function useAirportTransfer(id: string, enabled = true) {
  return useQuery({
    queryKey: airportTransferQueryKeys.detail(id),

    queryFn: () => AirportTransferService.getOne(id),

    enabled: enabled && Boolean(id),

    staleTime: DEFAULT_QUERY_STALE_TIME,
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
        queryKey: airportTransferQueryKeys.lists(),
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
          queryKey: airportTransferQueryKeys.lists(),
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
          queryKey: airportTransferQueryKeys.lists(),
        }),

        queryClient.removeQueries({
          queryKey: airportTransferQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
