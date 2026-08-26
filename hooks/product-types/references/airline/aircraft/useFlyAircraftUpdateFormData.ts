"use client";

import { useQuery } from "@tanstack/react-query";

import { FlyAircraftService } from "@/services/product-types/references/airline/aircraft/client";

export const useFlyAircraftUpdateFormData = (
  flyAircraftId: string,
  enabled = true,
) => {
  const query = useQuery({
    queryKey: ["fly-aircraft-update-form-data", flyAircraftId],

    enabled: enabled && !!flyAircraftId,

    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const initialData = await FlyAircraftService.getOne(flyAircraftId);

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
