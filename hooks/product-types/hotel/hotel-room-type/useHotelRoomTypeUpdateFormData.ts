"use client";

import { useQuery } from "@tanstack/react-query";

import { HotelRoomTypeService } from "@/services/product-types/hotel/hotel-room-type/client";
import { HotelBathroomTypeService } from "@/services/product-types/hotel/hotel-bathroom-type/client";
import { HotelRoomCategoryService } from "@/services/product-types/hotel/hotel-room-category/client";
import { HotelRoomViewService } from "@/services/product-types/hotel/hotel-room-view/client";

export const useHotelRoomTypeUpdateFormData = (id: string, enabled = true) => {
  const query = useQuery({
    queryKey: ["hotel-room-type-update-form-data", id],
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const [initialData, roomCategories, bathroomTypes, roomViews] =
        await Promise.all([
          HotelRoomTypeService.getOne(id),
          HotelRoomCategoryService.getMany(),
          HotelBathroomTypeService.getMany(),
          HotelRoomViewService.getMany(),
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
    isPending: query.isPending,
    isLoading: query.isLoading,
    isFetching: query.isFetching,
    isError: query.isError,
    error: query.error,
    refetch: query.refetch,
  };
};
