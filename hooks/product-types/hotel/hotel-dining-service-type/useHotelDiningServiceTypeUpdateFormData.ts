"use client";

import { useQuery } from "@tanstack/react-query";

import { HotelDiningServiceTypeService } from "@/services/product-types/hotel/hotel-dining-service-type/client";

export const useHotelDiningServiceTypeUpdateFormData = (
  id: string,
  enabled = true,
) => {
  const query = useQuery({
    queryKey: ["hotel-dining-service-type-update-form-data", id],
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
    queryFn: async () => {
      const [initialData] = await Promise.all([
        HotelDiningServiceTypeService.getOne(id),
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
    // Chỉ có 1 nguồn dữ liệu (diningServiceType) nên lấy thẳng message
    // của nó.
    errors: {
      diningServiceType: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};
