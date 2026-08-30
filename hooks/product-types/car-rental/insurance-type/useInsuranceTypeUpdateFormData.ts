"use client";

import { CarRentalInsuranceTypeService } from "@/services/product-types/car-rental/insurance-type/client";
import { useQuery } from "@tanstack/react-query";

export const useCarRentalInsuranceTypeUpdateFormData = (
  id: string,
  enabled = true,
) => {
  const query = useQuery({
    queryKey: ["car-rental-insurance-type-update-form-data", id],
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const [initialData] = await Promise.all([
        CarRentalInsuranceTypeService.getOne(id),
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
    // Chỉ có 1 nguồn dữ liệu (insuranceType) nên lấy thẳng message của nó.
    errors: {
      insuranceType: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};
