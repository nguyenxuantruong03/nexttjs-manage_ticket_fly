"use client";

import { FlyAirlineService } from "@/services/product-types/references/airline/client";
import { useQuery } from "@tanstack/react-query";

export const useFlyAirlineUpdateFormData = (
  flyAirlineId: string,
  enabled = true,
) => {
  const flyAirlineQuery = useQuery({
    queryKey: ["fly-airline-update-form-data", flyAirlineId],
    enabled: enabled && !!flyAirlineId,
    staleTime: 1000 * 60 * 5,
    queryFn: () => FlyAirlineService.getOne(flyAirlineId),
  });

  return {
    data: flyAirlineQuery.data,

    isPending: flyAirlineQuery.isPending,

    isLoading: flyAirlineQuery.isLoading,

    isFetching: flyAirlineQuery.isFetching,

    isError: flyAirlineQuery.isError,

    error: flyAirlineQuery.error,

    refetch: flyAirlineQuery.refetch,
  };
};
