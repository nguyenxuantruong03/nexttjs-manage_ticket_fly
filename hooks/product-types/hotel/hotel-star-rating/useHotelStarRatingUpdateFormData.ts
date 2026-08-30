"use client";

import { useQuery } from "@tanstack/react-query";

import { HotelStarRatingService } from "@/services/product-types/hotel/hotel-star-rating/client";

export const useHotelStarRatingUpdateFormData = (
  id: string,
  enabled = true,
) => {
  const query = useQuery({
    queryKey: ["hotel-star-rating-update-form-data", id],
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const [initialData] = await Promise.all([
        HotelStarRatingService.getOne(id),
      ]);

      return {
        initialData,
      };
    },
  });

  return {
    data: query.data,

    isLoading: query.isLoading,
    isFetching: query.isFetching,

    isError: query.isError,
    // Chỉ có 1 nguồn dữ liệu (Promise.all gộp chung, gồm cả
    // initialData) nên chỉ có 1 key, đặt tên "starRating" cho nhất
    // quán với entity.
    errors: {
      starRating: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};
