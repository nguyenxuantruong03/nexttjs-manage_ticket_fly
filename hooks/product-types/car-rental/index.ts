"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { CarRentalService } from "@/services/product-types/car-rental/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// Query Keys
// ======================================================

export const carRentalQueryKeys = {
  all: ["car-rental"] as const,

  lists: () => [...carRentalQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...carRentalQueryKeys.lists(), { page, limit }] as const,

  details: () => [...carRentalQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...carRentalQueryKeys.details(), id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useCarRentals(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: carRentalQueryKeys.list(page, limit),

    queryFn: () =>
      CarRentalService.getMany({
        page,
        limit,
      }),

    enabled,

    staleTime: DEFAULT_QUERY_STALE_TIME,

    placeholderData: keepPreviousData,
  });
}

export function useCarRental(id: string, enabled = true) {
  return useQuery({
    queryKey: carRentalQueryKeys.detail(id),

    queryFn: () => CarRentalService.getOne(id),

    enabled: enabled && Boolean(id),

    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateCarRental() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof CarRentalService.create>[0]) =>
      CarRentalService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: carRentalQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateCarRental() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof CarRentalService.update>[1];
    }) => CarRentalService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: carRentalQueryKeys.lists(),
        }),

        queryClient.invalidateQueries({
          queryKey: carRentalQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteCarRental() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => CarRentalService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: carRentalQueryKeys.lists(),
        }),

        queryClient.removeQueries({
          queryKey: carRentalQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
