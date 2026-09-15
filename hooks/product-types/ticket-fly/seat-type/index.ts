"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { FlySeatTypeService } from "@/services/product-types/ticket-fly/seat-type/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// Query Keys
// ======================================================

export const flySeatTypeQueryKeys = {
  all: ["fly-seat-type"] as const,

  lists: () => [...flySeatTypeQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...flySeatTypeQueryKeys.lists(), { page, limit }] as const,

  details: () => [...flySeatTypeQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...flySeatTypeQueryKeys.details(), id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useFlySeatTypes(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: flySeatTypeQueryKeys.list(page, limit),
    queryFn: () =>
      FlySeatTypeService.getMany({
        page,
        limit,
      }),
    enabled,
    staleTime: DEFAULT_QUERY_STALE_TIME,
    placeholderData: keepPreviousData,
  });
}

export function useFlySeatType(id: string, enabled = true) {
  return useQuery({
    queryKey: flySeatTypeQueryKeys.detail(id),
    queryFn: () => FlySeatTypeService.getOne(id),
    enabled: enabled && Boolean(id),
    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateFlySeatType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof FlySeatTypeService.create>[0]) =>
      FlySeatTypeService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: flySeatTypeQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateFlySeatType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof FlySeatTypeService.update>[1];
    }) => FlySeatTypeService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: flySeatTypeQueryKeys.lists(),
        }),
        queryClient.invalidateQueries({
          queryKey: flySeatTypeQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteFlySeatType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => FlySeatTypeService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: flySeatTypeQueryKeys.lists(),
        }),
        queryClient.removeQueries({
          queryKey: flySeatTypeQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
