"use client";
import { HotelAccessibilityService } from "@/services/product-types/hotel/hotel-accessibility/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ======================================================
// Query Keys
// ======================================================

export const hotelAccessibilityQueryKeys = {
  all: ["hotel-accessibility"] as const,
  list: () => [...hotelAccessibilityQueryKeys.all, "list"] as const,
  detail: (id: string) =>
    [...hotelAccessibilityQueryKeys.all, "detail", id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useHotelAccessibilities(enabled = true) {
  return useQuery({
    queryKey: hotelAccessibilityQueryKeys.list(),
    queryFn: () => HotelAccessibilityService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useHotelAccessibility(id: string, enabled = true) {
  return useQuery({
    queryKey: hotelAccessibilityQueryKeys.detail(id),
    queryFn: () => HotelAccessibilityService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateHotelAccessibility() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (
      data: Parameters<typeof HotelAccessibilityService.create>[0],
    ) => HotelAccessibilityService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: hotelAccessibilityQueryKeys.list(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateHotelAccessibility() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof HotelAccessibilityService.update>[1];
    }) => HotelAccessibilityService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: hotelAccessibilityQueryKeys.list(),
        }),
        queryClient.invalidateQueries({
          queryKey: hotelAccessibilityQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteHotelAccessibility() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => HotelAccessibilityService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: hotelAccessibilityQueryKeys.list(),
        }),
        queryClient.removeQueries({
          queryKey: hotelAccessibilityQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
