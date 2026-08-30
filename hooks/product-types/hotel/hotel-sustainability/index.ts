"use client";

import { HotelSustainabilityService } from "@/services/product-types/hotel/hotel-sustainability/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ======================================================
// Query Keys
// ======================================================

export const hotelSustainabilityQueryKeys = {
  all: ["hotel-sustainability"] as const,
  list: () => [...hotelSustainabilityQueryKeys.all, "list"] as const,
  detail: (id: string) =>
    [...hotelSustainabilityQueryKeys.all, "detail", id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useHotelSustainabilities(enabled = true) {
  return useQuery({
    queryKey: hotelSustainabilityQueryKeys.list(),
    queryFn: () => HotelSustainabilityService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useHotelSustainability(id: string, enabled = true) {
  return useQuery({
    queryKey: hotelSustainabilityQueryKeys.detail(id),
    queryFn: () => HotelSustainabilityService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateHotelSustainability() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (
      data: Parameters<typeof HotelSustainabilityService.create>[0],
    ) => HotelSustainabilityService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: hotelSustainabilityQueryKeys.list(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateHotelSustainability() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof HotelSustainabilityService.update>[1];
    }) => HotelSustainabilityService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: hotelSustainabilityQueryKeys.list(),
        }),
        queryClient.invalidateQueries({
          queryKey: hotelSustainabilityQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteHotelSustainability() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => HotelSustainabilityService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: hotelSustainabilityQueryKeys.list(),
        }),
        queryClient.removeQueries({
          queryKey: hotelSustainabilityQueryKeys.detail(id),
        }),
      ]);
    },
  });
}