"use client";
import { HotelDiningServiceTypeService } from "@/services/product-types/hotel/hotel-dining-service-type/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ======================================================
// Query Keys
// ======================================================

export const hotelDiningServiceTypeQueryKeys = {
  all: ["hotel-dining-service-type"] as const,
  list: () => [...hotelDiningServiceTypeQueryKeys.all, "list"] as const,
  detail: (id: string) =>
    [...hotelDiningServiceTypeQueryKeys.all, "detail", id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useHotelDiningServiceTypes(enabled = true) {
  return useQuery({
    queryKey: hotelDiningServiceTypeQueryKeys.list(),
    queryFn: () => HotelDiningServiceTypeService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useHotelDiningServiceType(id: string, enabled = true) {
  return useQuery({
    queryKey: hotelDiningServiceTypeQueryKeys.detail(id),
    queryFn: () => HotelDiningServiceTypeService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateHotelDiningServiceType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (
      data: Parameters<typeof HotelDiningServiceTypeService.create>[0],
    ) => HotelDiningServiceTypeService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: hotelDiningServiceTypeQueryKeys.list(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateHotelDiningServiceType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof HotelDiningServiceTypeService.update>[1];
    }) => HotelDiningServiceTypeService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: hotelDiningServiceTypeQueryKeys.list(),
        }),
        queryClient.invalidateQueries({
          queryKey: hotelDiningServiceTypeQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteHotelDiningServiceType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => HotelDiningServiceTypeService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: hotelDiningServiceTypeQueryKeys.list(),
        }),
        queryClient.removeQueries({
          queryKey: hotelDiningServiceTypeQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
