"use client";

import { HotelRoomTypeService } from "@/services/product-types/hotel/hotel-room-type/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ======================================================
// Query Keys
// ======================================================

export const hotelRoomTypeQueryKeys = {
  all: ["hotel-room-type"] as const,
  list: () => [...hotelRoomTypeQueryKeys.all, "list"] as const,
  detail: (id: string) =>
    [...hotelRoomTypeQueryKeys.all, "detail", id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useHotelRoomTypes(enabled = true) {
  return useQuery({
    queryKey: hotelRoomTypeQueryKeys.list(),
    queryFn: () => HotelRoomTypeService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useHotelRoomType(id: string, enabled = true) {
  return useQuery({
    queryKey: hotelRoomTypeQueryKeys.detail(id),
    queryFn: () => HotelRoomTypeService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateHotelRoomType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof HotelRoomTypeService.create>[0]) =>
      HotelRoomTypeService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: hotelRoomTypeQueryKeys.list(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateHotelRoomType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof HotelRoomTypeService.update>[1];
    }) => HotelRoomTypeService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: hotelRoomTypeQueryKeys.list(),
        }),
        queryClient.invalidateQueries({
          queryKey: hotelRoomTypeQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteHotelRoomType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => HotelRoomTypeService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: hotelRoomTypeQueryKeys.list(),
        }),
        queryClient.removeQueries({
          queryKey: hotelRoomTypeQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
