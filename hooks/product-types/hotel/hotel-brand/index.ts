"use client";
import { HotelBrandService } from "@/services/product-types/hotel/hotel-brand/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ======================================================
// Query Keys
// ======================================================

export const hotelBrandQueryKeys = {
  all: ["hotel-brand"] as const,
  list: () => [...hotelBrandQueryKeys.all, "list"] as const,
  detail: (id: string) => [...hotelBrandQueryKeys.all, "detail", id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useHotelBrands(enabled = true) {
  return useQuery({
    queryKey: hotelBrandQueryKeys.list(),
    queryFn: () => HotelBrandService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useHotelBrand(id: string, enabled = true) {
  return useQuery({
    queryKey: hotelBrandQueryKeys.detail(id),
    queryFn: () => HotelBrandService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateHotelBrand() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof HotelBrandService.create>[0]) =>
      HotelBrandService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: hotelBrandQueryKeys.list(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateHotelBrand() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof HotelBrandService.update>[1];
    }) => HotelBrandService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: hotelBrandQueryKeys.list(),
        }),
        queryClient.invalidateQueries({
          queryKey: hotelBrandQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteHotelBrand() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => HotelBrandService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: hotelBrandQueryKeys.list(),
        }),
        queryClient.removeQueries({
          queryKey: hotelBrandQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
