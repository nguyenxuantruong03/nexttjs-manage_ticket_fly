"use client";

import { FlyAirlineService } from "@/services/product-types/references/airline/client";
import { useQuery } from "@tanstack/react-query";

export const useFlyAircraftCreateFormData = (enabled = true) => {
  const query = useQuery({
    queryKey: ["fly-aircraft-create-form-data"],

    enabled,

    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const [airlineData] = await Promise.all([FlyAirlineService.getMany()]);

      return {
        airlineData
      }
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
