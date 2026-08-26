"use client";

import { FlyAircraftTypeService } from "@/services/product-types/references/airline/aircraft/aircraft-type/client";
import { useQuery } from "@tanstack/react-query";

export const useFlyAircraftTypeUpdateFormData = (
  flyAircraftTypeId: string,
  enabled = true,
) => {
  const query = useQuery({
    queryKey: ["fly-aircraft-type-update-form-data", flyAircraftTypeId],

    enabled: enabled && !!flyAircraftTypeId,

    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const initialData =
        await FlyAircraftTypeService.getOne(flyAircraftTypeId);

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
