"use client";

import { HotelRoomViewService } from "@/services/product-types/hotel/hotel-room-view/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ======================================================
// Query Keys
// ======================================================

export const hotelRoomViewQueryKeys = {
  all: ["hotel-room-view"] as const,
  list: () => [...hotelRoomViewQueryKeys.all, "list"] as const,
  detail: (id: string) =>
    [...hotelRoomViewQueryKeys.all, "detail", id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useHotelRoomViews(enabled = true) {
  return useQuery({
    queryKey: hotelRoomViewQueryKeys.list(),
    queryFn: () => HotelRoomViewService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useHotelRoomView(id: string, enabled = true) {
  return useQuery({
    queryKey: hotelRoomViewQueryKeys.detail(id),
    queryFn: () => HotelRoomViewService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateHotelRoomView() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof HotelRoomViewService.create>[0]) =>
      HotelRoomViewService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: hotelRoomViewQueryKeys.list(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateHotelRoomView() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof HotelRoomViewService.update>[1];
    }) => HotelRoomViewService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: hotelRoomViewQueryKeys.list(),
        }),
        queryClient.invalidateQueries({
          queryKey: hotelRoomViewQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteHotelRoomView() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => HotelRoomViewService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: hotelRoomViewQueryKeys.list(),
        }),
        queryClient.removeQueries({
          queryKey: hotelRoomViewQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
