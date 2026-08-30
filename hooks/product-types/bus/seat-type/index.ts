"use client";

import { BusSeatTypeService } from "@/services/product-types/ticket-bus/seat-type/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ======================================================
// Query Keys
// ======================================================

export const busSeatTypeQueryKeys = {
  all: ["bus-seat-type"] as const,
  list: () => [...busSeatTypeQueryKeys.all, "list"] as const,
  detail: (id: string) => [...busSeatTypeQueryKeys.all, "detail", id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useBusSeatTypes(enabled = true) {
  return useQuery({
    queryKey: busSeatTypeQueryKeys.list(),
    queryFn: () => BusSeatTypeService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useBusSeatType(id: string, enabled = true) {
  return useQuery({
    queryKey: busSeatTypeQueryKeys.detail(id),
    queryFn: () => BusSeatTypeService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateBusSeatType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof BusSeatTypeService.create>[0]) =>
      BusSeatTypeService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: busSeatTypeQueryKeys.list(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateBusSeatType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof BusSeatTypeService.update>[1];
    }) => BusSeatTypeService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: busSeatTypeQueryKeys.list(),
        }),
        queryClient.invalidateQueries({
          queryKey: busSeatTypeQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteBusSeatType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => BusSeatTypeService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: busSeatTypeQueryKeys.list(),
        }),
        queryClient.removeQueries({
          queryKey: busSeatTypeQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
