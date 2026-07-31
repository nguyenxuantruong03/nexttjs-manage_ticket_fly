"use client";

import { HotelFacilityCategoryService } from "@/services/hotel/hotel-facility-category/client";
import { useQuery } from "@tanstack/react-query";

export const useHotelFacilityCreateFormData = (enabled = true) => {
  const query = useQuery({
    queryKey: ["hotel-facility-create-form-data"],
    enabled,
    staleTime: 1000 * 60 * 5,
    queryFn: async () => {
      const [facilityCategory] = await Promise.all([
        HotelFacilityCategoryService.getMany(),
      ]);

      return { facilityCategory };
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
