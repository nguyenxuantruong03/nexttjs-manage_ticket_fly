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

    isLoading: query.isLoading,
    isFetching: query.isFetching,

    isError: query.isError,
    errors: {
      fareRuleType: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};
