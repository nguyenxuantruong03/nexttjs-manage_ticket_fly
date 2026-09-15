"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { BusSeatTypeService } from "@/services/product-types/ticket-bus/seat-type/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// Query Keys
// ======================================================

export const busSeatTypeQueryKeys = {
  all: ["bus-seat-type"] as const,

  lists: () => [...busSeatTypeQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...busSeatTypeQueryKeys.lists(), { page, limit }] as const,

  details: () => [...busSeatTypeQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...busSeatTypeQueryKeys.details(), id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useBusSeatTypes(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: busSeatTypeQueryKeys.list(page, limit),

    queryFn: () =>
      BusSeatTypeService.getMany({
        page,
        limit,
      }),

    enabled,

    staleTime: DEFAULT_QUERY_STALE_TIME,

    placeholderData: keepPreviousData,
  });
}

export function useBusSeatType(id: string, enabled = true) {
  return useQuery({
    queryKey: busSeatTypeQueryKeys.detail(id),

    queryFn: () => BusSeatTypeService.getOne(id),

    enabled: enabled && Boolean(id),

    staleTime: DEFAULT_QUERY_STALE_TIME,
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
        queryKey: busSeatTypeQueryKeys.lists(),
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
          queryKey: busSeatTypeQueryKeys.lists(),
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
          queryKey: busSeatTypeQueryKeys.lists(),
        }),

        queryClient.removeQueries({
          queryKey: busSeatTypeQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
