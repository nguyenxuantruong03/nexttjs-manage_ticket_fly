"use client";
import { HotelBathroomTypeService } from "@/services/product-types/hotel/hotel-bathroom-type/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ======================================================
// Query Keys
// ======================================================

export const hotelBathroomTypeQueryKeys = {
  all: ["hotel-bathroom-type"] as const,
  list: () => [...hotelBathroomTypeQueryKeys.all, "list"] as const,
  detail: (id: string) =>
    [...hotelBathroomTypeQueryKeys.all, "detail", id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useHotelBathroomTypes(enabled = true) {
  return useQuery({
    queryKey: hotelBathroomTypeQueryKeys.list(),
    queryFn: () => HotelBathroomTypeService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useHotelBathroomType(id: string, enabled = true) {
  return useQuery({
    queryKey: hotelBathroomTypeQueryKeys.detail(id),
    queryFn: () => HotelBathroomTypeService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateHotelBathroomType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof HotelBathroomTypeService.create>[0]) =>
      HotelBathroomTypeService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: hotelBathroomTypeQueryKeys.list(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateHotelBathroomType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof HotelBathroomTypeService.update>[1];
    }) => HotelBathroomTypeService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: hotelBathroomTypeQueryKeys.list(),
        }),
        queryClient.invalidateQueries({
          queryKey: hotelBathroomTypeQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteHotelBathroomType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => HotelBathroomTypeService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: hotelBathroomTypeQueryKeys.list(),
        }),
        queryClient.removeQueries({
          queryKey: hotelBathroomTypeQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
