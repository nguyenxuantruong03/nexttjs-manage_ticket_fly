"use client";
import { HotelStarRatingService } from "@/services/hotel/hotel-star-rating/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["hotel-star-rating"] as const;

export function useHotelStarRatings() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => HotelStarRatingService.getMany(),
  });
}

export function useHotelStarRating(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => HotelStarRatingService.getOne(id),
    enabled: !!id,
  });
}

export function useCreateHotelStarRating() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: HotelStarRatingService.create,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

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

    onSuccess(_, variables) {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });

      queryClient.invalidateQueries({
        queryKey: [...QUERY_KEY, variables.id],
      });
    },
  });
}

export function useDeleteHotelStarRating() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: HotelStarRatingService.delete,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}
