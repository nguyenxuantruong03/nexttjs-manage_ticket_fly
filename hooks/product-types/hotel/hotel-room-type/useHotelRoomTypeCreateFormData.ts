"use client";

import { useQuery } from "@tanstack/react-query";

import { HotelBathroomTypeService } from "@/services/product-types/hotel/hotel-bathroom-type/client";
import { HotelRoomCategoryService } from "@/services/product-types/hotel/hotel-room-category/client";
import { HotelRoomViewService } from "@/services/product-types/hotel/hotel-room-view/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

export const useHotelRoomTypeCreateFormData = (enabled = true) => {
  const query = useQuery({
    queryKey: ["hotel-room-type-create-form-data"],
    enabled,
    staleTime: DEFAULT_QUERY_STALE_TIME,

    queryFn: async () => {
      const [roomCategories, bathroomTypes, roomViews] = await Promise.all([
        HotelRoomCategoryService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        HotelBathroomTypeService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        HotelRoomViewService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
      ]);

      return {
        roomCategories,
        bathroomTypes,
        roomViews,
      };
    },
  });

  return {
    data: query.data,
    isLoading: query.isLoading,
    isFetching: query.isFetching,
    isError: query.isError,

    errors: {
      roomType: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};
