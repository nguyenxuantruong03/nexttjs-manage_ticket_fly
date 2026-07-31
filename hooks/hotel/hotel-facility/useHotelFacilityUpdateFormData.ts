"use client";

import { HotelFacilityCategoryService } from "@/services/hotel/hotel-facility-category/client";
import { HotelFacilityService } from "@/services/hotel/hotel-facility/client";
import { useQuery } from "@tanstack/react-query";

export const useHotelFacilityUpdateFormData = (id: string, enabled = true) => {
  const query = useQuery({
    queryKey: ["hotel-facility-update-form-data", id],
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
    queryFn: async () => {
      const [initialData,facilityCategory] = await Promise.all([
        HotelFacilityService.getOne(id),
        HotelFacilityCategoryService.getMany()
      ]);

      return {
        initialData,
        facilityCategory
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
