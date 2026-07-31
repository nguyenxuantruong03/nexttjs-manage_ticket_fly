"use client";

import { useQuery } from "@tanstack/react-query";

import { HotelExtraTypeService } from "@/services/hotel/hotel-extra-type/client";

export const useHotelExtraTypeUpdateFormData = (id: string, enabled = true) => {
  const query = useQuery({
    queryKey: ["hotel-extra-type-update-form-data", id],
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
    queryFn: async () => {
      const [initialData] = await Promise.all([
        HotelExtraTypeService.getOne(id),
      ]);

      return {
        initialData,
      };
    },
  });

  return {
    data: query.data,

    isPending: query.isPending,
    isLoading: query.isLoading,
    isFetching: query.isFetching,
    isError: query.isError,
    error: query.error,

    refetch: query.refetch,
  };
};
