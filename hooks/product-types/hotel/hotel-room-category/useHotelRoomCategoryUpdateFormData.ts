"use client";

import { HotelRoomCategoryService } from "@/services/product-types/hotel/hotel-room-category/client";
import { useQuery } from "@tanstack/react-query";

export const useHotelRoomCategoryUpdateFormData = (
  id: string,
  enabled = true,
) => {
  const query = useQuery({
    queryKey: ["hotel-room-category-update-form-data", id],
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
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
    // Chỉ có 1 nguồn dữ liệu (roomCategory) nên lấy thẳng message của nó.
    errors: {
      roomCategory: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};
