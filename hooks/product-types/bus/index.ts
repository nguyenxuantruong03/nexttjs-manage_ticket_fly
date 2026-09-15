"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { TicketBusService } from "@/services/product-types/ticket-bus/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// Query Keys
// ======================================================

export const busQueryKeys = {
  all: ["bus"] as const,

  lists: () => [...busQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...busQueryKeys.lists(), { page, limit }] as const,

  details: () => [...busQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...busQueryKeys.details(), id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useBuses(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: busQueryKeys.list(page, limit),

    queryFn: () =>
      TicketBusService.getMany({
        page,
        limit,
      }),

    enabled,

    staleTime: DEFAULT_QUERY_STALE_TIME,

    placeholderData: keepPreviousData,
  });
}

export function useBus(id: string, enabled = true) {
  return useQuery({
    queryKey: busQueryKeys.detail(id),

    queryFn: () => TicketBusService.getOne(id),

    enabled: enabled && Boolean(id),

    staleTime: DEFAULT_QUERY_STALE_TIME,
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
        queryKey: busQueryKeys.lists(),
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
          queryKey: busQueryKeys.lists(),
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
          queryKey: busQueryKeys.lists(),
        }),

        queryClient.removeQueries({
          queryKey: busQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
