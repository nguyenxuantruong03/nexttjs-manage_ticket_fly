"use client";
import { HotelDiningMealTypeService } from "@/services/product-types/hotel/hotel-dining-meal-type/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ======================================================
// Query Keys
// ======================================================

export const hotelDiningMealTypeQueryKeys = {
  all: ["hotel-dining-meal-type"] as const,
  list: () => [...hotelDiningMealTypeQueryKeys.all, "list"] as const,
  detail: (id: string) =>
    [...hotelDiningMealTypeQueryKeys.all, "detail", id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useHotelDiningMealTypes(enabled = true) {
  return useQuery({
    queryKey: hotelDiningMealTypeQueryKeys.list(),
    queryFn: () => HotelDiningMealTypeService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useHotelDiningMealType(id: string, enabled = true) {
  return useQuery({
    queryKey: hotelDiningMealTypeQueryKeys.detail(id),
    queryFn: () => HotelDiningMealTypeService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateHotelDiningMealType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (
      data: Parameters<typeof HotelDiningMealTypeService.create>[0],
    ) => HotelDiningMealTypeService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: hotelDiningMealTypeQueryKeys.list(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateHotelDiningMealType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof HotelDiningMealTypeService.update>[1];
    }) => HotelDiningMealTypeService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: hotelDiningMealTypeQueryKeys.list(),
        }),
        queryClient.invalidateQueries({
          queryKey: hotelDiningMealTypeQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteHotelDiningMealType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => HotelDiningMealTypeService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: hotelDiningMealTypeQueryKeys.list(),
        }),
        queryClient.removeQueries({
          queryKey: hotelDiningMealTypeQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
