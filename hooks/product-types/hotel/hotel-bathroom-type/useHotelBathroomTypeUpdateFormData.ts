"use client";

import { useQuery } from "@tanstack/react-query";

import { HotelBathroomTypeService } from "@/services/product-types/hotel/hotel-bathroom-type/client";

export const useHotelBathroomTypeUpdateFormData = (
  id: string,
  enabled = true,
) => {
  const query = useQuery({
    queryKey: ["hotel-bathroom-type-update-form-data", id],
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
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
    // Chỉ có 1 nguồn dữ liệu (bathroomType) nên lấy thẳng message của nó.
    errors: {
      bathroomType: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};
