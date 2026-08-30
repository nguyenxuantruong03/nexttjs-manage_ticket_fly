"use client";

import { useQuery } from "@tanstack/react-query";

import { HotelSustainabilityService } from "@/services/product-types/hotel/hotel-sustainability/client";

export const useHotelSustainabilityUpdateFormData = (
  id: string,
  enabled = true,
) => {
  const query = useQuery({
    queryKey: ["hotel-sustainability-update-form-data", id],
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const [initialData] = await Promise.all([
        HotelSustainabilityService.getOne(id),
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
    // initialData) nên chỉ có 1 key, đặt tên "sustainability" cho
    // nhất quán với entity.
    errors: {
      sustainability: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};