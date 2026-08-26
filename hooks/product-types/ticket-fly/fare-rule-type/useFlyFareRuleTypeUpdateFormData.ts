"use client";

import { useQuery } from "@tanstack/react-query";

import { FlyFareRuleTypeService } from "@/services/product-types/ticket-fly/fare-rule-type/client";

export const useFlyFareRuleTypeUpdateFormData = (
  flyFareRuleTypeId: string,
  enabled = true,
) => {
  const query = useQuery({
    queryKey: ["fly-fare-rule-type-update-form-data", flyFareRuleTypeId],

    enabled: enabled && !!flyFareRuleTypeId,

    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const [initialData] = await Promise.all([
        FlyFareRuleTypeService.getOne(flyFareRuleTypeId),
      ]);

      return {
        initialData,
      };
    },
  });

  return {
    data: query.data,

    isPending: query.isPending,

    isLoading: query.isLoading,

    isFetching: query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: query.refetch,
  };
};
