"use client";
import { HotelRoomCategoryService } from "@/services/product-types/hotel/hotel-room-category/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ======================================================
// Query Keys
// ======================================================

export const hotelRoomCategoryQueryKeys = {
  all: ["hotel-room-category"] as const,
  list: () => [...hotelRoomCategoryQueryKeys.all, "list"] as const,
  detail: (id: string) =>
    [...hotelRoomCategoryQueryKeys.all, "detail", id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useHotelRoomCategories(enabled = true) {
  return useQuery({
    queryKey: hotelRoomCategoryQueryKeys.list(),
    queryFn: () => HotelRoomCategoryService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useHotelRoomCategory(id: string, enabled = true) {
  return useQuery({
    queryKey: hotelRoomCategoryQueryKeys.detail(id),
    queryFn: () => HotelRoomCategoryService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateHotelRoomCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof HotelRoomCategoryService.create>[0]) =>
      HotelRoomCategoryService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: hotelRoomCategoryQueryKeys.list(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateHotelRoomCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof HotelRoomCategoryService.update>[1];
    }) => HotelRoomCategoryService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: hotelRoomCategoryQueryKeys.list(),
        }),
        queryClient.invalidateQueries({
          queryKey: hotelRoomCategoryQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteHotelRoomCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => HotelRoomCategoryService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: hotelRoomCategoryQueryKeys.list(),
        }),
        queryClient.removeQueries({
          queryKey: hotelRoomCategoryQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
