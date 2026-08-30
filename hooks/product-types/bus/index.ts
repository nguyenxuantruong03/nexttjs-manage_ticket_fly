"use client";
import { TicketBusService } from "@/services/product-types/ticket-bus/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ======================================================
// Query Keys
// ======================================================

export const busQueryKeys = {
  all: ["bus"] as const,
  list: () => [...busQueryKeys.all, "list"] as const,
  detail: (id: string) => [...busQueryKeys.all, "detail", id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useBuses(enabled = true) {
  return useQuery({
    queryKey: busQueryKeys.list(),
    queryFn: () => TicketBusService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useBus(id: string, enabled = true) {
  return useQuery({
    queryKey: busQueryKeys.detail(id),
    queryFn: () => TicketBusService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateBus() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof TicketBusService.create>[0]) =>
      TicketBusService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: busQueryKeys.list(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateBus() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof TicketBusService.update>[1];
    }) => TicketBusService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: busQueryKeys.list(),
        }),
        queryClient.invalidateQueries({
          queryKey: busQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteBus() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => TicketBusService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: busQueryKeys.list(),
        }),
        queryClient.removeQueries({
          queryKey: busQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
