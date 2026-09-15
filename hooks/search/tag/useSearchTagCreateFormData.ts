"use client";

import { useQuery } from "@tanstack/react-query";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

import { BookingTypeService } from "@/services/commerce/booking-type/client";

export const useSearchTagCreateFormData = (enabled = true) => {
  const query = useQuery({
    queryKey: ["search-tag-create-form-data"],
    enabled,
    staleTime: DEFAULT_QUERY_STALE_TIME,

    queryFn: async () => {
      const [bookingTypeData] = await Promise.all([
        BookingTypeService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
      ]);

      return {
        bookingTypeData,
      };
    },
  });

  return {
    data: query.data,
    isLoading: query.isLoading,
    isFetching: query.isFetching,
    isError: query.isError,

    errors: {
      searchTag: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};
