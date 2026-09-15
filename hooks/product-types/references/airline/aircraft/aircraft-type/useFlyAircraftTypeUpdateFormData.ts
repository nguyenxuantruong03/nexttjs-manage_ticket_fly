"use client";

import { useQuery } from "@tanstack/react-query";

import { FlyAircraftTypeService } from "@/services/product-types/references/airline/aircraft/aircraft-type/client";

import { DEFAULT_QUERY_STALE_TIME } from "@/config/react-query.config";

export const useFlyAircraftTypeUpdateFormData = (
  flyAircraftTypeId: string,
  enabled = true,
) => {
  const query = useQuery({
    queryKey: ["fly-aircraft-type-update-form-data", flyAircraftTypeId],
    enabled: enabled && Boolean(flyAircraftTypeId),
    staleTime: DEFAULT_QUERY_STALE_TIME,

    queryFn: async () => {
      const [initialData] = await Promise.all([
        FlyAircraftTypeService.getOne(flyAircraftTypeId),
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
      aircraftType: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};
