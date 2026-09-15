"use client";

import { useQuery } from "@tanstack/react-query";

import { CarRentalInsuranceBenefitTypeService } from "@/services/product-types/car-rental/insurance-benefit-type/client";

import { DEFAULT_QUERY_STALE_TIME } from "@/config/react-query.config";

export const useCarRentalInsuranceBenefitTypeUpdateFormData = (
  id: string,
  enabled = true,
) => {
  const query = useQuery({
    queryKey: ["car-rental-insurance-benefit-type-update-form-data", id],

    enabled: enabled && Boolean(id),

    staleTime: DEFAULT_QUERY_STALE_TIME,

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

    errors: {
      insuranceBenefitType: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};
