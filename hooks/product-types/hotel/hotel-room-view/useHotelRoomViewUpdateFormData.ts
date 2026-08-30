"use client";

import { useQuery } from "@tanstack/react-query";

import { HotelRoomViewService } from "@/services/product-types/hotel/hotel-room-view/client";

export const useHotelRoomViewUpdateFormData = (id: string, enabled = true) => {
  const query = useQuery({
    queryKey: ["hotel-room-view-update-form-data", id],
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const [initialData] = await Promise.all([
        HotelRoomViewService.getOne(id),
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
    // initialData) nên chỉ có 1 key, đặt tên "roomView" cho nhất
    // quán với entity.
    errors: {
      roomView: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};