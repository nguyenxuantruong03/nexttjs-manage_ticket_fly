"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { FlyCabinClassService } from "@/services/product-types/ticket-fly/cabin-class/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// Query Keys
// ======================================================

export const flyCabinClassQueryKeys = {
  all: ["fly-cabin-class"] as const,

  lists: () => [...flyCabinClassQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...flyCabinClassQueryKeys.lists(), { page, limit }] as const,

  details: () => [...flyCabinClassQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...flyCabinClassQueryKeys.details(), id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useFlyCabinClasses(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: flyCabinClassQueryKeys.list(page, limit),
    queryFn: () =>
      FlyCabinClassService.getMany({
        page,
        limit,
      }),
    enabled,
    staleTime: DEFAULT_QUERY_STALE_TIME,
    placeholderData: keepPreviousData,
  });
}

export function useFlyCabinClass(id: string, enabled = true) {
  return useQuery({
    queryKey: flyCabinClassQueryKeys.detail(id),
    queryFn: () => FlyCabinClassService.getOne(id),
    enabled: enabled && Boolean(id),
    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateFlyCabinClass() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof FlyCabinClassService.create>[0]) =>
      FlyCabinClassService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: flyCabinClassQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateFlyCabinClass() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof FlyCabinClassService.update>[1];
    }) => FlyCabinClassService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: flyCabinClassQueryKeys.lists(),
        }),
        queryClient.invalidateQueries({
          queryKey: flyCabinClassQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteFlyCabinClass() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => FlyCabinClassService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: flyCabinClassQueryKeys.lists(),
        }),
        queryClient.removeQueries({
          queryKey: flyCabinClassQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
