"use client";

import { useQuery } from "@tanstack/react-query";

import { FlyAirlineService } from "@/services/product-types/references/airline/client";
import { BookingTypeService } from "@/services/commerce/booking-type/client";
import { MediaCategoryService } from "@/services/catalog/media-category/client";
import { MediaAssetService } from "@/services/catalog/media-asset/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

export const useFlyAircraftCreateFormData = (enabled = true) => {
  const query = useQuery({
    queryKey: ["fly-aircraft-create-form-data"],
    enabled,
    staleTime: DEFAULT_QUERY_STALE_TIME,

    queryFn: async () => {
      const [airlineData, bookingTypeData, mediaAssetData, mediaCategoryData] =
        await Promise.all([
          FlyAirlineService.getMany({
            page: DEFAULT_PAGE,
            limit: DEFAULT_LIMIT,
          }),
          BookingTypeService.getMany({
            page: DEFAULT_PAGE,
            limit: DEFAULT_LIMIT,
          }),
          MediaAssetService.getMany({
            page: DEFAULT_PAGE,
            limit: DEFAULT_LIMIT,
          }),
          MediaCategoryService.getMany({
            page: DEFAULT_PAGE,
            limit: DEFAULT_LIMIT,
          }),
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
