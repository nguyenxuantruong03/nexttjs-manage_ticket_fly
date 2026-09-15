"use client";

import { useQuery } from "@tanstack/react-query";

import { FlyCrewDutyService } from "@/services/product-types/references/airline/crew/crew-duty/client";

import { DEFAULT_QUERY_STALE_TIME } from "@/config/react-query.config";

export const useFlyCrewDutyUpdateFormData = (
  flyCrewDutyId: string,
  enabled = true,
) => {
  const query = useQuery({
    queryKey: ["fly-crew-duty-update-form-data", flyCrewDutyId],
    enabled: enabled && Boolean(flyCrewDutyId),
    staleTime: DEFAULT_QUERY_STALE_TIME,

    queryFn: async () => {
      const [initialData] = await Promise.all([
        FlyCrewDutyService.getOne(flyCrewDutyId),
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
      crewDuty: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};
