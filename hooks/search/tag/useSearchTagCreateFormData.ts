"use client";

import { useQuery } from "@tanstack/react-query";

import { BookingTypeService } from "@/services/commerce/booking-type/client";

export const useSearchTagCreateFormData = (enabled = true) => {
  const query = useQuery({
    queryKey: ["search-tag-create-form-data"],

    enabled,

    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const [bookingTypeData] = await Promise.all([
        BookingTypeService.getMany(),
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
