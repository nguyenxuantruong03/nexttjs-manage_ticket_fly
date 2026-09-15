"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { HotelMealPlanService } from "@/services/product-types/hotel/hotel-meal-plan/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// Query Keys
// ======================================================

export const hotelMealPlanQueryKeys = {
  all: ["hotel-meal-plan"] as const,

  lists: () => [...hotelMealPlanQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...hotelMealPlanQueryKeys.lists(), { page, limit }] as const,

  details: () => [...hotelMealPlanQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...hotelMealPlanQueryKeys.details(), id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useHotelMealPlans(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: hotelMealPlanQueryKeys.list(page, limit),
    queryFn: () =>
      HotelMealPlanService.getMany({
        page,
        limit,
      }),
    enabled,
    staleTime: DEFAULT_QUERY_STALE_TIME,
    placeholderData: keepPreviousData,
  });
}

export function useHotelMealPlan(id: string, enabled = true) {
  return useQuery({
    queryKey: hotelMealPlanQueryKeys.detail(id),
    queryFn: () => HotelMealPlanService.getOne(id),
    enabled: enabled && Boolean(id),
    staleTime: DEFAULT_QUERY_STALE_TIME,
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
        queryKey: hotelMealPlanQueryKeys.lists(),
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
          queryKey: hotelMealPlanQueryKeys.lists(),
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
          queryKey: hotelMealPlanQueryKeys.lists(),
        }),
        queryClient.removeQueries({
          queryKey: hotelMealPlanQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
