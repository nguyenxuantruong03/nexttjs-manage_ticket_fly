"use client";

import { BookingTypeService } from "@/services/commerce/booking-type/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ======================================================
// Query Keys
// ======================================================

export const bookingTypeQueryKeys = {
  all: ["booking-type"] as const,
  list: () => [...bookingTypeQueryKeys.all, "list"] as const,
  detail: (id: string) => [...bookingTypeQueryKeys.all, "detail", id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useBookingTypes(enabled = true) {
  return useQuery({
    queryKey: bookingTypeQueryKeys.list(),
    queryFn: () => BookingTypeService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useBookingType(id: string, enabled = true) {
  return useQuery({
    queryKey: bookingTypeQueryKeys.detail(id),
    queryFn: () => BookingTypeService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateBookingType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof BookingTypeService.create>[0]) =>
      BookingTypeService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: bookingTypeQueryKeys.list(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateBookingType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof BookingTypeService.update>[1];
    }) => BookingTypeService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: bookingTypeQueryKeys.list(),
        }),
        queryClient.invalidateQueries({
          queryKey: bookingTypeQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteBookingType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => BookingTypeService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: bookingTypeQueryKeys.list(),
        }),
        queryClient.removeQueries({
          queryKey: bookingTypeQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
