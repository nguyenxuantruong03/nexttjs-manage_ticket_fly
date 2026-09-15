"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { HotelDiningMealTypeService } from "@/services/product-types/hotel/hotel-dining-meal-type/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// Query Keys
// ======================================================

export const hotelDiningMealTypeQueryKeys = {
  all: ["hotel-dining-meal-type"] as const,

  lists: () => [...hotelDiningMealTypeQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...hotelDiningMealTypeQueryKeys.lists(), { page, limit }] as const,

  details: () => [...hotelDiningMealTypeQueryKeys.all, "detail"] as const,

  detail: (id: string) =>
    [...hotelDiningMealTypeQueryKeys.details(), id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useHotelDiningMealTypes(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: hotelDiningMealTypeQueryKeys.list(page, limit),
    queryFn: () =>
      HotelDiningMealTypeService.getMany({
        page,
        limit,
      }),
    enabled,
    staleTime: DEFAULT_QUERY_STALE_TIME,
    placeholderData: keepPreviousData,
  });
}

export function useHotelDiningMealType(id: string, enabled = true) {
  return useQuery({
    queryKey: hotelDiningMealTypeQueryKeys.detail(id),
    queryFn: () => HotelDiningMealTypeService.getOne(id),
    enabled: enabled && Boolean(id),
    staleTime: DEFAULT_QUERY_STALE_TIME,
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
        queryKey: hotelDiningMealTypeQueryKeys.lists(),
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
          queryKey: hotelDiningMealTypeQueryKeys.lists(),
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
          queryKey: hotelDiningMealTypeQueryKeys.lists(),
        }),
        queryClient.removeQueries({
          queryKey: hotelDiningMealTypeQueryKeys.detail(id),
        }),
      ]);
    },
  });
}