"use client";

import { FlyAllianceService } from "@/services/product-types/references/alliance/client";
import { useQuery } from "@tanstack/react-query";

export const useFlyAllianceUpdateFormData = (
  flyAllianceId: string,
  enabled = true,
) => {
  const query = useQuery({
    queryKey: ["fly-alliance-update-form-data", flyAllianceId],
    enabled: enabled && !!flyAllianceId,
    staleTime: 1000 * 60 * 5,
    queryFn: async () => {
      const initialData = await FlyAllianceService.getOne(flyAllianceId);

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
