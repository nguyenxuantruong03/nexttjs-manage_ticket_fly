"use client";

import { HotelRoomMediaCategoryService } from "@/services/hotel/hotel-room-media-category/client";
import { useQuery } from "@tanstack/react-query";

export const useHotelRoomMediaCategoryUpdateFormData = (id: string, enabled = true) => {
  const query = useQuery({
    queryKey: ["hotel-room-media-category-update-form-data", id],
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
    queryFn: async () => {
      const [initialData] = await Promise.all([HotelRoomMediaCategoryService.getOne(id)]);

      return {
        initialData,
      };
    },
  });

  return {
    data: query.data,

    isPending: query.isPending,
    isLoading: query.isLoading,
    isFetching: query.isFetching,
    isError: query.isError,
    error: query.error,

    refetch: query.refetch,
  };
};
