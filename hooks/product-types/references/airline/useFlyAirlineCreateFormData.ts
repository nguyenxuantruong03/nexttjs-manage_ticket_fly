"use client";

import { useQuery } from "@tanstack/react-query";

import { BookingTypeService } from "@/services/commerce/booking-type/client";
import { MediaAssetService } from "@/services/catalog/media-asset/client";
import { MediaCategoryService } from "@/services/catalog/media-category/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

export const useFlyAirlineCreateFormData = (enabled = true) => {
  const query = useQuery({
    queryKey: ["fly-airline-create-form-data"],
    enabled,
    staleTime: DEFAULT_QUERY_STALE_TIME,

    queryFn: async () => {
      const [bookingTypeData, mediaAssetData, mediaCategoryData] =
        await Promise.all([
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
