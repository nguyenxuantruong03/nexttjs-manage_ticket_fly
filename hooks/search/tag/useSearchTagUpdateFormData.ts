"use client";

import { useQuery } from "@tanstack/react-query";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

import { SearchTagService } from "@/services/search/tag/client";
import { BookingTypeService } from "@/services/commerce/booking-type/client";

export const useSearchTagUpdateFormData = (tagId: string, enabled = true) => {
  const query = useQuery({
    queryKey: ["search-tag-update-form-data", tagId],
    enabled: enabled && Boolean(tagId),
    staleTime: DEFAULT_QUERY_STALE_TIME,

    queryFn: async () => {
      const [initialData, bookingTypeData] = await Promise.all([
        SearchTagService.getOne(tagId),
        BookingTypeService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
      ]);

      return {
        initialData,
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
