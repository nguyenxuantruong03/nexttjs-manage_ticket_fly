"use client";

import { FlyAirlineService } from "@/services/product-types/references/airline/client";
import { useQuery } from "@tanstack/react-query";

export const useFlyAirlineUpdateFormData = (
  flyAirlineId: string,
  enabled = true,
) => {
  const query = useQuery({
    queryKey: ["fly-airline-update-form-data", flyAirlineId],
    enabled: enabled && !!flyAirlineId,
    staleTime: 1000 * 60 * 5,
    queryFn: () => FlyAirlineService.getOne(flyAirlineId),
  });

  return {
    data: query.data,

    isLoading: query.isLoading,
    isFetching: query.isFetching,

    isError: query.isError,
    // Chỉ có 1 nguồn dữ liệu (getOne) nên chỉ có 1 key, đặt tên
    // "airline" cho nhất quán với entity.
    errors: {
      airline: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};
