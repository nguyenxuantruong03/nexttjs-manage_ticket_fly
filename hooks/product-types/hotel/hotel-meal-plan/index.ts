"use client";
import { HotelMealPlanService } from "@/services/product-types/hotel/hotel-meal-plan/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ======================================================
// Query Keys
// ======================================================

export const hotelMealPlanQueryKeys = {
  all: ["hotel-meal-plan"] as const,
  list: () => [...hotelMealPlanQueryKeys.all, "list"] as const,
  detail: (id: string) =>
    [...hotelMealPlanQueryKeys.all, "detail", id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useHotelMealPlans(enabled = true) {
  return useQuery({
    queryKey: hotelMealPlanQueryKeys.list(),
    queryFn: () => HotelMealPlanService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useHotelMealPlan(id: string, enabled = true) {
  return useQuery({
    queryKey: hotelMealPlanQueryKeys.detail(id),
    queryFn: () => HotelMealPlanService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateHotelMealPlan() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof HotelMealPlanService.create>[0]) =>
      HotelMealPlanService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: hotelMealPlanQueryKeys.list(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateHotelMealPlan() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof HotelMealPlanService.update>[1];
    }) => HotelMealPlanService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: hotelMealPlanQueryKeys.list(),
        }),
        queryClient.invalidateQueries({
          queryKey: hotelMealPlanQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteHotelMealPlan() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => HotelMealPlanService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: hotelMealPlanQueryKeys.list(),
        }),
        queryClient.removeQueries({
          queryKey: hotelMealPlanQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
