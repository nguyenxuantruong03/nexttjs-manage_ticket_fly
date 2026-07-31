"use client";

import { HotelBathroomTypeService } from "@/services/hotel/hotel-bathroom-type/client";
import { HotelBedTypeService } from "@/services/hotel/hotel-bed-type/client";
import { HotelRoomCategoryService } from "@/services/hotel/hotel-room-category/client";
import { HotelRoomViewService } from "@/services/hotel/hotel-room-view/client";
import { useQuery } from "@tanstack/react-query";



export const useHotelRoomTypeCreateFormData = (enabled = true) => {
  const query = useQuery({
    queryKey: ["hotel-room-type-create-form-data"],
    enabled,
    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const [
        roomCategories,
        bathroomTypes,
        roomViews,
      ] = await Promise.all([
        HotelRoomCategoryService.getMany(),
        HotelBathroomTypeService.getMany(),
        HotelRoomViewService.getMany(),
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
    isPending: query.isPending,
    isLoading: query.isLoading,
    isFetching: query.isFetching,
    isError: query.isError,
    error: query.error,
    refetch: query.refetch,
  };
};
