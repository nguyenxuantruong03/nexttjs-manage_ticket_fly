"use client";

import { useQuery } from "@tanstack/react-query";

import { FlyAirlineService } from "@/services/product-types/references/airline/client";
import { BookingTypeService } from "@/services/commerce/booking-type/client";
import { MediaAssetService } from "@/services/catalog/media-asset/client";
import { MediaCategoryService } from "@/services/catalog/media-category/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

export const useFlyAirlineUpdateFormData = (
  flyAirlineId: string,
  enabled = true,
) => {
  const query = useQuery({
    queryKey: ["fly-airline-update-form-data", flyAirlineId],
    enabled: enabled && Boolean(flyAirlineId),
    staleTime: DEFAULT_QUERY_STALE_TIME,

    queryFn: async () => {
      const [initialData, bookingTypeData, mediaAssetData, mediaCategoryData] =
        await Promise.all([
          FlyAirlineService.getOne(flyAirlineId),
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
