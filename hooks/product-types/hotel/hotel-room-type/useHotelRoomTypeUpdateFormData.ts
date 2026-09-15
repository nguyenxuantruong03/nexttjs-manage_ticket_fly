"use client";

import { useQuery } from "@tanstack/react-query";

import { HotelBathroomTypeService } from "@/services/product-types/hotel/hotel-bathroom-type/client";
import { HotelRoomCategoryService } from "@/services/product-types/hotel/hotel-room-category/client";
import { HotelRoomTypeService } from "@/services/product-types/hotel/hotel-room-type/client";
import { HotelRoomViewService } from "@/services/product-types/hotel/hotel-room-view/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

export const useHotelRoomTypeUpdateFormData = (id: string, enabled = true) => {
  const query = useQuery({
    queryKey: ["hotel-room-type-update-form-data", id],
    enabled: enabled && Boolean(id),
    staleTime: DEFAULT_QUERY_STALE_TIME,

    queryFn: async () => {
      const [initialData, roomCategories, bathroomTypes, roomViews] =
        await Promise.all([
          HotelRoomTypeService.getOne(id),
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
        initialData,
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
