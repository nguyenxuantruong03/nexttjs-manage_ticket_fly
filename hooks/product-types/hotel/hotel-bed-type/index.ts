"use client";
import { HotelBedTypeService } from "@/services/product-types/hotel/hotel-bed-type/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ======================================================
// Query Keys
// ======================================================

export const hotelBedTypeQueryKeys = {
  all: ["hotel-bed-type"] as const,
  list: () => [...hotelBedTypeQueryKeys.all, "list"] as const,
  detail: (id: string) => [...hotelBedTypeQueryKeys.all, "detail", id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useHotelBedTypes(enabled = true) {
  return useQuery({
    queryKey: hotelBedTypeQueryKeys.list(),
    queryFn: () => HotelBedTypeService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useHotelBedType(id: string, enabled = true) {
  return useQuery({
    queryKey: hotelBedTypeQueryKeys.detail(id),
    queryFn: () => HotelBedTypeService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateHotelBedType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof HotelBedTypeService.create>[0]) =>
      HotelBedTypeService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: hotelBedTypeQueryKeys.list(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateHotelBedType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof HotelBedTypeService.update>[1];
    }) => HotelBedTypeService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: hotelBedTypeQueryKeys.list(),
        }),
        queryClient.invalidateQueries({
          queryKey: hotelBedTypeQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ============================================

// ======================================================
// Delete
// ======================================================

export function useDeleteHotelBedType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => HotelBedTypeService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: hotelBedTypeQueryKeys.list(),
        }),
        queryClient.removeQueries({
          queryKey: hotelBedTypeQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
