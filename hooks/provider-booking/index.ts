"use client";
import { ProviderBookingService } from "@/services/provider-booking/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ======================================================
// Query Keys
// ======================================================

export const providerBookingQueryKeys = {
  all: ["provider-booking"] as const,
  list: () => [...providerBookingQueryKeys.all, "list"] as const,
  detail: (id: string) =>
    [...providerBookingQueryKeys.all, "detail", id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useProviderBookings(enabled = true) {
  return useQuery({
    queryKey: providerBookingQueryKeys.list(),
    queryFn: () => ProviderBookingService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useProviderBooking(id: string, enabled = true) {
  return useQuery({
    queryKey: providerBookingQueryKeys.detail(id),
    queryFn: () => ProviderBookingService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
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
        queryKey: providerBookingQueryKeys.list(),
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
          queryKey: providerBookingQueryKeys.list(),
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
          queryKey: providerBookingQueryKeys.list(),
        }),
        queryClient.removeQueries({
          queryKey: providerBookingQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
