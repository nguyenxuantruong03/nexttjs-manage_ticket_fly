"use client";

import { TicketFlyService } from "@/services/product-types/ticket-fly/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ======================================================
// Query Keys
// ======================================================

export const ticketFlyQueryKeys = {
  all: ["ticket-fly"] as const,
  list: () => [...ticketFlyQueryKeys.all, "list"] as const,
  detail: (id: string) => [...ticketFlyQueryKeys.all, "detail", id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useTicketsFly(enabled = true) {
  return useQuery({
    queryKey: ticketFlyQueryKeys.list(),
    queryFn: () => TicketFlyService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useTicketFly(id: string, enabled = true) {
  return useQuery({
    queryKey: ticketFlyQueryKeys.detail(id),
    queryFn: () => TicketFlyService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateTicketFly() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof TicketFlyService.create>[0]) =>
      TicketFlyService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ticketFlyQueryKeys.list(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateTicketFly() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof TicketFlyService.update>[1];
    }) => TicketFlyService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: ticketFlyQueryKeys.list(),
        }),
        queryClient.invalidateQueries({
          queryKey: ticketFlyQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteTicketFly() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => TicketFlyService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: ticketFlyQueryKeys.list(),
        }),
        queryClient.removeQueries({
          queryKey: ticketFlyQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
