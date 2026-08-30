"use client";
import { HotelService } from "@/services/product-types/hotel/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ======================================================
// Query Keys
// ======================================================

export const hotelQueryKeys = {
  all: ["hotel"] as const,
  list: () => [...hotelQueryKeys.all, "list"] as const,
  detail: (id: string) => [...hotelQueryKeys.all, "detail", id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useHotels(enabled = true) {
  return useQuery({
    queryKey: hotelQueryKeys.list(),
    queryFn: () => HotelService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useHotel(id: string, enabled = true) {
  return useQuery({
    queryKey: hotelQueryKeys.detail(id),
    queryFn: () => HotelService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateHotel() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof HotelService.create>[0]) =>
      HotelService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: hotelQueryKeys.list(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateHotel() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof HotelService.update>[1];
    }) => HotelService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: hotelQueryKeys.list() }),
        queryClient.invalidateQueries({
          queryKey: hotelQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteHotel() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => HotelService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: hotelQueryKeys.list() }),
        queryClient.removeQueries({ queryKey: hotelQueryKeys.detail(id) }),
      ]);
    },
  });
}
