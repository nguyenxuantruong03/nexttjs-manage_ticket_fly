"use client";

import { useQuery } from "@tanstack/react-query";

import { FlyAircraftService } from "@/services/product-types/references/airline/aircraft/client";

import { FlyAirlineService } from "@/services/product-types/references/airline/client";

import { BookingTypeService } from "@/services/commerce/booking-type/client";

import { MediaAssetService } from "@/services/catalog/media-asset/client";

import { MediaCategoryService } from "@/services/catalog/media-category/client";

export const useFlyAircraftUpdateFormData = (
  flyAircraftId: string,
  enabled = true,
) => {
  const query = useQuery({
    queryKey: ["fly-aircraft-update-form-data", flyAircraftId],
    enabled: enabled && !!flyAircraftId,
    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const [
        initialData,
        airlineData,
        bookingTypeData,
        mediaAssetData,
        mediaCategoryData,
      ] = await Promise.all([
        FlyAircraftService.getOne(flyAircraftId),
        FlyAirlineService.getMany(),
        BookingTypeService.getMany(),
        MediaAssetService.getMany(),
        MediaCategoryService.getMany(),
      ]);

      return {
        initialData,
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