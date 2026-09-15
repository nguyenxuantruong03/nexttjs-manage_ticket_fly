"use client";

import { useQuery } from "@tanstack/react-query";

import { HotelBrandService } from "@/services/product-types/hotel/hotel-brand/client";

import { DEFAULT_QUERY_STALE_TIME } from "@/config/react-query.config";

export const useHotelBrandUpdateFormData = (id: string, enabled = true) => {
  const query = useQuery({
    queryKey: ["hotel-brand-update-form-data", id],
    enabled: enabled && Boolean(id),
    staleTime: DEFAULT_QUERY_STALE_TIME,

    queryFn: async () => {
      const [initialData] = await Promise.all([HotelBrandService.getOne(id)]);

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
      brand: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};
