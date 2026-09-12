"use client";

import { useQuery } from "@tanstack/react-query";

import { FlyAirlineService } from "@/services/product-types/references/airline/client";

import { BookingTypeService } from "@/services/commerce/booking-type/client";

import { MediaCategoryService } from "@/services/catalog/media-category/client";

import { MediaAssetService } from "@/services/catalog/media-asset/client";

export const useFlyAircraftCreateFormData = (enabled = true) => {
  const query = useQuery({
    queryKey: ["fly-aircraft-create-form-data"],
    enabled,
    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const [
        airlineData,
        bookingTypeData,
        mediaAssetData,
        mediaCategoryData,
      ] = await Promise.all([
        FlyAirlineService.getMany(),
        BookingTypeService.getMany(),
        MediaAssetService.getMany(),
        MediaCategoryService.getMany(),
      ]);

      return {
        airlineData,
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
      aircraft: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};