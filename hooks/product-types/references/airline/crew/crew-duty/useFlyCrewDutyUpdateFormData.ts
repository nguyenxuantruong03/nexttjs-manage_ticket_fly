"use client";

import { useQuery } from "@tanstack/react-query";

import { FlyCrewDutyService } from "@/services/product-types/references/airline/crew/crew-duty/client";

export const useFlyCrewDutyUpdateFormData = (
  flyCrewDutyId: string,
  enabled = true,
) => {
  const query = useQuery({
    queryKey: ["fly-crew-duty-update-form-data", flyCrewDutyId],

    enabled: enabled && !!flyCrewDutyId,

    staleTime: 1000 * 60 * 5,

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
    // Chỉ có 1 nguồn dữ liệu (Promise.all gộp chung, gồm cả
    // initialData) nên chỉ có 1 key, đặt tên "crewDuty" cho nhất
    // quán với entity.
    errors: {
      crewDuty: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};
