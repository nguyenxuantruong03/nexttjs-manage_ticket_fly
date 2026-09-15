"use client";

import { useQuery } from "@tanstack/react-query";

import { HotelRoomCategoryService } from "@/services/product-types/hotel/hotel-room-category/client";

import { DEFAULT_QUERY_STALE_TIME } from "@/config/react-query.config";

export const useHotelRoomCategoryUpdateFormData = (
  id: string,
  enabled = true,
) => {
  const query = useQuery({
    queryKey: ["hotel-room-category-update-form-data", id],
    enabled: enabled && Boolean(id),
    staleTime: DEFAULT_QUERY_STALE_TIME,

    queryFn: async () => {
      const [initialData] = await Promise.all([
        HotelRoomCategoryService.getOne(id),
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

    errors: {
      roomCategory: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};
