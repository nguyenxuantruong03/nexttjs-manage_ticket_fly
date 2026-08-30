"use client";

import { HotelRatePlanTypeService } from "@/services/product-types/hotel/hotel-rate-plan-type/client";
import { useQuery } from "@tanstack/react-query";

export const useHotelRatePlanTypeUpdateFormData = (
  id: string,
  enabled = true,
) => {
  const query = useQuery({
    queryKey: ["hotel-rate-plan-type-update-form-data", id],
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
    queryFn: async () => {
      const [initialData] = await Promise.all([
        HotelRatePlanTypeService.getOne(id),
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
    // Chỉ có 1 nguồn dữ liệu (ratePlanType) nên lấy thẳng message của nó.
    errors: {
      ratePlanType: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};
