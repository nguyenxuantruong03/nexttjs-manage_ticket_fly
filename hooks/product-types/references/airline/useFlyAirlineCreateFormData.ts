"use client";

import { useQuery } from "@tanstack/react-query";

import { BookingTypeService } from "@/services/commerce/booking-type/client";

import { MediaAssetService } from "@/services/catalog/media-asset/client";

import { MediaCategoryService } from "@/services/catalog/media-category/client";

export const useFlyAirlineCreateFormData = (enabled = true) => {
  const query = useQuery({
    queryKey: ["fly-airline-create-form-data"],
    enabled,
    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const [
        bookingTypeData,
        mediaAssetData,
        mediaCategoryData,
      ] = await Promise.all([
        BookingTypeService.getMany(),
        MediaAssetService.getMany(),
        MediaCategoryService.getMany(),
      ]);

      return {
        bookingTypeData,
        mediaAssetData,
        mediaCategoryData,
      };
    },
  });

  return {
    data: query.data,
    isLoading: query.isLoading,
    isFetching: query.isFetching,
    isError: query.isError,

    errors: {
      airline: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};