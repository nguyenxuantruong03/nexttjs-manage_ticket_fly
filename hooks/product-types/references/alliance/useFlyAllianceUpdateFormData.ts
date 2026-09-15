"use client";

import { useQuery } from "@tanstack/react-query";

import { FlyAllianceService } from "@/services/product-types/references/alliance/client";

import { DEFAULT_QUERY_STALE_TIME } from "@/config/react-query.config";

export const useFlyAllianceUpdateFormData = (
  flyAllianceId: string,
  enabled = true,
) => {
  const query = useQuery({
    queryKey: ["fly-alliance-update-form-data", flyAllianceId],
    enabled: enabled && Boolean(flyAllianceId),
    staleTime: DEFAULT_QUERY_STALE_TIME,

    queryFn: async () => {
      const [initialData] = await Promise.all([
        FlyAllianceService.getOne(flyAllianceId),
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
      alliance: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};
