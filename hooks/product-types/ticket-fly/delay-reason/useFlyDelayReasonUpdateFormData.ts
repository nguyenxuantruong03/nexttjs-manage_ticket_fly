"use client";

import { useQuery } from "@tanstack/react-query";

import { FlyDelayReasonService } from "@/services/product-types/ticket-fly/delay-reason/client";

export const useFlyDelayReasonUpdateFormData = (
  flyDelayReasonId: string,
  enabled = true,
) => {
  const query = useQuery({
    queryKey: ["fly-delay-reason-update-form-data", flyDelayReasonId],

    enabled: enabled && !!flyDelayReasonId,

    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const [initialData] = await Promise.all([
        FlyDelayReasonService.getOne(flyDelayReasonId),
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
      delayReason: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};
