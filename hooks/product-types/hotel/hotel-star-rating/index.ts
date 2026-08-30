"use client";

import { HotelStarRatingService } from "@/services/product-types/hotel/hotel-star-rating/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ======================================================
// Query Keys
// ======================================================

export const hotelStarRatingQueryKeys = {
  all: ["hotel-star-rating"] as const,
  list: () => [...hotelStarRatingQueryKeys.all, "list"] as const,
  detail: (id: string) =>
    [...hotelStarRatingQueryKeys.all, "detail", id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useHotelStarRatings(enabled = true) {
  return useQuery({
    queryKey: hotelStarRatingQueryKeys.list(),
    queryFn: () => HotelStarRatingService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useHotelStarRating(id: string, enabled = true) {
  return useQuery({
    queryKey: hotelStarRatingQueryKeys.detail(id),
    queryFn: () => HotelStarRatingService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateHotelStarRating() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof HotelStarRatingService.create>[0]) =>
      HotelStarRatingService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: hotelStarRatingQueryKeys.list(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateHotelStarRating() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof HotelStarRatingService.update>[1];
    }) => HotelStarRatingService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: hotelStarRatingQueryKeys.list(),
        }),
        queryClient.invalidateQueries({
          queryKey: hotelStarRatingQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteHotelStarRating() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => HotelStarRatingService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: hotelStarRatingQueryKeys.list(),
        }),
        queryClient.removeQueries({
          queryKey: hotelStarRatingQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
