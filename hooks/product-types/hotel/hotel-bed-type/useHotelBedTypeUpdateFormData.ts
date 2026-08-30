"use client";

import { useQuery } from "@tanstack/react-query";

import { HotelBedTypeService } from "@/services/product-types/hotel/hotel-bed-type/client";

export const useHotelBedTypeUpdateFormData = (id: string, enabled = true) => {
  const query = useQuery({
    queryKey: ["hotel-bed-type-update-form-data", id],
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
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
    // Chỉ có 1 nguồn dữ liệu (bedType) nên lấy thẳng message của nó.
    errors: {
      bedType: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};
