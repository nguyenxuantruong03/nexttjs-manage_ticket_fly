"use client";

import { useQuery } from "@tanstack/react-query";

import { FlyAirlineService } from "@/services/product-types/references/airline/client";

import { BookingTypeService } from "@/services/commerce/booking-type/client";

import { MediaAssetService } from "@/services/catalog/media-asset/client";

import { MediaCategoryService } from "@/services/catalog/media-category/client";

export const useFlyAirlineUpdateFormData = (
  flyAirlineId: string,
  enabled = true,
) => {
  const query = useQuery({
    queryKey: ["fly-airline-update-form-data", flyAirlineId],
    enabled: enabled && !!flyAirlineId,
    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const [
        initialData,
        bookingTypeData,
        mediaAssetData,
        mediaCategoryData,
      ] = await Promise.all([
        FlyAirlineService.getOne(flyAirlineId),
        BookingTypeService.getMany(),
        MediaAssetService.getMany(),
        MediaCategoryService.getMany(),
      ]);

      return {
        initialData,
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