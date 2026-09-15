"use client";

import { useQuery } from "@tanstack/react-query";

import { FlyFareRuleTypeService } from "@/services/product-types/ticket-fly/fare-rule-type/client";

import { DEFAULT_QUERY_STALE_TIME } from "@/config/react-query.config";

export const useFlyFareRuleTypeUpdateFormData = (
  flyFareRuleTypeId: string,
  enabled = true,
) => {
  const query = useQuery({
    queryKey: ["fly-fare-rule-type-update-form-data", flyFareRuleTypeId],
    enabled: enabled && Boolean(flyFareRuleTypeId),
    staleTime: DEFAULT_QUERY_STALE_TIME,

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