"use client";
import { HotelRatePlanTypeService } from "@/services/product-types/hotel/hotel-rate-plan-type/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ======================================================
// Query Keys
// ======================================================

export const hotelRatePlanTypeQueryKeys = {
  all: ["hotel-rate-plan-type"] as const,
  list: () => [...hotelRatePlanTypeQueryKeys.all, "list"] as const,
  detail: (id: string) =>
    [...hotelRatePlanTypeQueryKeys.all, "detail", id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useHotelRatePlanTypes(enabled = true) {
  return useQuery({
    queryKey: hotelRatePlanTypeQueryKeys.list(),
    queryFn: () => HotelRatePlanTypeService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useHotelRatePlanType(id: string, enabled = true) {
  return useQuery({
    queryKey: hotelRatePlanTypeQueryKeys.detail(id),
    queryFn: () => HotelRatePlanTypeService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateHotelRatePlanType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof HotelRatePlanTypeService.create>[0]) =>
      HotelRatePlanTypeService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: hotelRatePlanTypeQueryKeys.list(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateHotelRatePlanType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof HotelRatePlanTypeService.update>[1];
    }) => HotelRatePlanTypeService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: hotelRatePlanTypeQueryKeys.list(),
        }),
        queryClient.invalidateQueries({
          queryKey: hotelRatePlanTypeQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteHotelRatePlanType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => HotelRatePlanTypeService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: hotelRatePlanTypeQueryKeys.list(),
        }),
        queryClient.removeQueries({
          queryKey: hotelRatePlanTypeQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
