"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { HotelStarRatingService } from "@/services/product-types/hotel/hotel-star-rating/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// Query Keys
// ======================================================

export const hotelStarRatingQueryKeys = {
  all: ["hotel-star-rating"] as const,

  lists: () => [...hotelStarRatingQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...hotelStarRatingQueryKeys.lists(), { page, limit }] as const,

  details: () => [...hotelStarRatingQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...hotelStarRatingQueryKeys.details(), id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useHotelStarRatings(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: hotelStarRatingQueryKeys.list(page, limit),
    queryFn: () =>
      HotelStarRatingService.getMany({
        page,
        limit,
      }),
    enabled,
    staleTime: DEFAULT_QUERY_STALE_TIME,
    placeholderData: keepPreviousData,
  });
}

export function useHotelStarRating(id: string, enabled = true) {
  return useQuery({
    queryKey: hotelStarRatingQueryKeys.detail(id),
    queryFn: () => HotelStarRatingService.getOne(id),
    enabled: enabled && Boolean(id),
    staleTime: DEFAULT_QUERY_STALE_TIME,
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
        queryKey: hotelStarRatingQueryKeys.lists(),
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
          queryKey: hotelStarRatingQueryKeys.lists(),
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
          queryKey: hotelStarRatingQueryKeys.lists(),
        }),
        queryClient.removeQueries({
          queryKey: hotelStarRatingQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
