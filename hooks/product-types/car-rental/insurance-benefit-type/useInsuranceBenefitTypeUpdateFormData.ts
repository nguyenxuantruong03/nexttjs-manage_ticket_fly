"use client";

import { CarRentalInsuranceBenefitTypeService } from "@/services/product-types/car-rental/insurance-benefit-type/client";
import { useQuery } from "@tanstack/react-query";

export const useCarRentalInsuranceBenefitTypeUpdateFormData = (
  id: string,
  enabled = true,
) => {
  const query = useQuery({
    queryKey: ["car-rental-insurance-benefit-type-update-form-data", id],
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const [initialData] = await Promise.all([
        CarRentalInsuranceBenefitTypeService.getOne(id),
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
    // Chỉ có 1 nguồn dữ liệu (insuranceBenefitType) nên lấy thẳng
    // message của nó.
    errors: {
      insuranceBenefitType: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};
