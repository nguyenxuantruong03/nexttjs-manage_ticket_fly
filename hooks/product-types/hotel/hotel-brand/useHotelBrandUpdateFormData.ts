"use client";

import { HotelBrandService } from "@/services/product-types/hotel/hotel-brand/client";
import { useQuery } from "@tanstack/react-query";

export const useHotelBrandUpdateFormData = (id: string, enabled = true) => {
  const query = useQuery({
    queryKey: ["hotel-brand-update-form-data", id],
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
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
    // Chỉ có 1 nguồn dữ liệu (brand) nên lấy thẳng message của nó.
    errors: {
      brand: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};
