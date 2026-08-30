"use client";

import { BookingItemTypeService } from "@/services/commerce/booking-item-type/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ======================================================
// Query Keys
// ======================================================

export const bookingItemTypeQueryKeys = {
  all: ["booking-item-type"] as const,
  list: () => [...bookingItemTypeQueryKeys.all, "list"] as const,
  detail: (id: string) =>
    [...bookingItemTypeQueryKeys.all, "detail", id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useBookingItemTypes(enabled = true) {
  return useQuery({
    queryKey: bookingItemTypeQueryKeys.list(),
    queryFn: () => BookingItemTypeService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useBookingItemType(id: string, enabled = true) {
  return useQuery({
    queryKey: bookingItemTypeQueryKeys.detail(id),
    queryFn: () => BookingItemTypeService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateBookingItemType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof BookingItemTypeService.create>[0]) =>
      BookingItemTypeService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: bookingItemTypeQueryKeys.list(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateBookingItemType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof BookingItemTypeService.update>[1];
    }) => BookingItemTypeService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: bookingItemTypeQueryKeys.list(),
        }),
        queryClient.invalidateQueries({
          queryKey: bookingItemTypeQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteBookingItemType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => BookingItemTypeService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: bookingItemTypeQueryKeys.list(),
        }),
        queryClient.removeQueries({
          queryKey: bookingItemTypeQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
