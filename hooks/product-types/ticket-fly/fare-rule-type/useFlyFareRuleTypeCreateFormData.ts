"use client";

import { useQuery } from "@tanstack/react-query";

import { FlyFareRuleTypeService } from "@/services/product-types/ticket-fly/fare-rule-type/client";

export const useFlyFareRuleTypeCreateFormData = (enabled = true) => {
  const query = useQuery({
    queryKey: ["fly-fare-rule-type-create-form-data"],
    enabled,

    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const [] = await Promise.all([]);

      return {};
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