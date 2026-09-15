"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { ProviderBookingService } from "@/services/provider-booking/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// Query Keys
// ======================================================

export const providerBookingQueryKeys = {
  all: ["provider-booking"] as const,

  lists: () => [...providerBookingQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...providerBookingQueryKeys.lists(), { page, limit }] as const,

  details: () => [...providerBookingQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...providerBookingQueryKeys.details(), id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useProviderBookings(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: providerBookingQueryKeys.list(page, limit),
    queryFn: () =>
      ProviderBookingService.getMany({
        page,
        limit,
      }),
    enabled,
    staleTime: DEFAULT_QUERY_STALE_TIME,
    placeholderData: keepPreviousData,
  });
}

export function useProviderBooking(id: string, enabled = true) {
  return useQuery({
    queryKey: providerBookingQueryKeys.detail(id),
    queryFn: () => ProviderBookingService.getOne(id),
    enabled: enabled && Boolean(id),
    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateProviderBooking() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof ProviderBookingService.create>[0]) =>
      ProviderBookingService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: providerBookingQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateProviderBooking() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof ProviderBookingService.update>[1];
    }) => ProviderBookingService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: providerBookingQueryKeys.lists(),
        }),
        queryClient.invalidateQueries({
          queryKey: providerBookingQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteProviderBooking() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => ProviderBookingService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: providerBookingQueryKeys.lists(),
        }),
        queryClient.removeQueries({
          queryKey: providerBookingQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
