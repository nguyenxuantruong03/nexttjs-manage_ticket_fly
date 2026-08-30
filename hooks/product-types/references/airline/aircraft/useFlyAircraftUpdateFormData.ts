"use client";

import { useQuery } from "@tanstack/react-query";

import { FlyAircraftService } from "@/services/product-types/references/airline/aircraft/client";

import { FlyAirlineService } from "@/services/product-types/references/airline/client";

export const useFlyAircraftUpdateFormData = (
  flyAircraftId: string,
  enabled = true,
) => {
  const query = useQuery({
    queryKey: ["fly-aircraft-update-form-data", flyAircraftId],

    enabled: enabled && !!flyAircraftId,

    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const [initialData, airlineData] = await Promise.all([
        FlyAircraftService.getOne(flyAircraftId),
        FlyAirlineService.getMany(),
      ]);

      return {
        initialData,
        airlineData,
      };
    },
  });

  return {
    data: query.data,

    isLoading: query.isLoading,
    isFetching: query.isFetching,

    isError: query.isError,
    // Chỉ có 1 nguồn dữ liệu (Promise.all gộp chung, gồm cả
    // initialData) nên chỉ có 1 key, đặt tên "aircraft" cho nhất
    // quán với entity.
    errors: {
      aircraft: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};
