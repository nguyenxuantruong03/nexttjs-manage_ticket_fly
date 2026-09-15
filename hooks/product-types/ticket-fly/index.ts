"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { TicketFlyService } from "@/services/product-types/ticket-fly/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// Query Keys
// ======================================================

export const ticketFlyQueryKeys = {
  all: ["ticket-fly"] as const,

  lists: () => [...ticketFlyQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...ticketFlyQueryKeys.lists(), { page, limit }] as const,

  details: () => [...ticketFlyQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...ticketFlyQueryKeys.details(), id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useTicketsFly(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: ticketFlyQueryKeys.list(page, limit),
    queryFn: () =>
      TicketFlyService.getMany({
        page,
        limit,
      }),
    enabled,
    staleTime: DEFAULT_QUERY_STALE_TIME,
    placeholderData: keepPreviousData,
  });
}

export function useTicketFly(id: string, enabled = true) {
  return useQuery({
    queryKey: ticketFlyQueryKeys.detail(id),
    queryFn: () => TicketFlyService.getOne(id),
    enabled: enabled && Boolean(id),
    staleTime: DEFAULT_QUERY_STALE_TIME,
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
        queryKey: ticketFlyQueryKeys.lists(),
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
          queryKey: ticketFlyQueryKeys.lists(),
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
          queryKey: ticketFlyQueryKeys.lists(),
        }),
        queryClient.removeQueries({
          queryKey: ticketFlyQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
