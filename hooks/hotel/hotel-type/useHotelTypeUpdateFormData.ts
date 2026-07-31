"use client";

import { HotelTypeService } from "@/services/hotel/hotel-type/client";
import { useQuery } from "@tanstack/react-query";

export const useHotelTypeUpdateFormData = (id: string, enabled = true) => {
  const query = useQuery({
    queryKey: ["hotel-type-update-form-data", id],
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
    queryFn: async () => {
      const [initialData] = await Promise.all([HotelTypeService.getOne(id)]);

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
