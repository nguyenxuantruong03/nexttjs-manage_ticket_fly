"use client";

import { useQuery } from "@tanstack/react-query";

import { HotelRoomViewService } from "@/services/product-types/hotel/hotel-room-view/client";

import { DEFAULT_QUERY_STALE_TIME } from "@/config/react-query.config";

export const useHotelRoomViewUpdateFormData = (id: string, enabled = true) => {
  const query = useQuery({
    queryKey: ["hotel-room-view-update-form-data", id],
    enabled: enabled && Boolean(id),
    staleTime: DEFAULT_QUERY_STALE_TIME,

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

    errors: {
      roomView: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};
