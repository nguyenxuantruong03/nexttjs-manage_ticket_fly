"use client";

import { useQuery } from "@tanstack/react-query";

import { CarRentalInsuranceTypeService } from "@/services/product-types/car-rental/insurance-type/client";

import { DEFAULT_QUERY_STALE_TIME } from "@/config/react-query.config";

export const useCarRentalInsuranceTypeUpdateFormData = (
  id: string,
  enabled = true,
) => {
  const query = useQuery({
    queryKey: ["car-rental-insurance-type-update-form-data", id],

    enabled: enabled && Boolean(id),

    staleTime: DEFAULT_QUERY_STALE_TIME,

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

    errors: {
      insuranceType: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};
