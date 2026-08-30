"use client";

import { useQuery } from "@tanstack/react-query";

import { FlyAircraftTypeService } from "@/services/product-types/references/airline/aircraft/aircraft-type/client";

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

    isLoading: query.isLoading,
    isFetching: query.isFetching,

    isError: query.isError,
    // Chỉ có 1 nguồn dữ liệu (initialData) nên chỉ có 1 key, đặt tên
    // "aircraftType" cho nhất quán với entity.
    errors: {
      aircraftType: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};
