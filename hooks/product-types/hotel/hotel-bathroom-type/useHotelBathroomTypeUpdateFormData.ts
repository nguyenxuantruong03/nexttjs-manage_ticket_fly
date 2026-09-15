"use client";

import { useQuery } from "@tanstack/react-query";

import { HotelBathroomTypeService } from "@/services/product-types/hotel/hotel-bathroom-type/client";

import { DEFAULT_QUERY_STALE_TIME } from "@/config/react-query.config";

export const useHotelBathroomTypeUpdateFormData = (
  id: string,
  enabled = true,
) => {
  const query = useQuery({
    queryKey: ["hotel-bathroom-type-update-form-data", id],
    enabled: enabled && Boolean(id),
    staleTime: DEFAULT_QUERY_STALE_TIME,

    queryFn: async () => {
      const [initialData] = await Promise.all([
        HotelBathroomTypeService.getOne(id),
      ]);

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
      bathroomType: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};
