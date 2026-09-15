"use client";

import { useQuery } from "@tanstack/react-query";

import { HotelBedTypeService } from "@/services/product-types/hotel/hotel-bed-type/client";

import { DEFAULT_QUERY_STALE_TIME } from "@/config/react-query.config";

export const useHotelBedTypeUpdateFormData = (id: string, enabled = true) => {
  const query = useQuery({
    queryKey: ["hotel-bed-type-update-form-data", id],
    enabled: enabled && Boolean(id),
    staleTime: DEFAULT_QUERY_STALE_TIME,

    queryFn: async () => {
      const [initialData] = await Promise.all([HotelBedTypeService.getOne(id)]);

      return {
        initialData,
      };
    },
  });

  return {
    data: query.data,
    isLoading: query.isLoading,
    isFetching: query.isFetching,
    isError: query.isError,

    errors: {
      bedType: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};
