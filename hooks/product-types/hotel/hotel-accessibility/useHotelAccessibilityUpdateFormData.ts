"use client";

import { HotelAccessibilityService } from "@/services/product-types/hotel/hotel-accessibility/client";
import { useQuery } from "@tanstack/react-query";

export const useHotelAccessibilityUpdateFormData = (
  id: string,
  enabled = true,
) => {
  const query = useQuery({
    queryKey: ["hotel-accessibility-update-form-data", id],
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
    queryFn: async () => {
      const [initialData] = await Promise.all([
        HotelAccessibilityService.getOne(id),
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
    // Chỉ có 1 nguồn dữ liệu (accessibility) nên lấy thẳng message của nó.
    errors: {
      accessibility: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};
