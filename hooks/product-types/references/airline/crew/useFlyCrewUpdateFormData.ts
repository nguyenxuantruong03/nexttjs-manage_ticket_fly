"use client";

import { useQuery } from "@tanstack/react-query";

import { FlyAirlineService } from "@/services/product-types/references/airline/client";
import { FlyCrewService } from "@/services/product-types/references/airline/crew/client";
import { FlyCrewRoleService } from "@/services/product-types/references/airline/crew/crew-role/client";
import { FlyCrewDutyService } from "@/services/product-types/references/airline/crew/crew-duty/client";
import { FlyAircraftTypeService } from "@/services/product-types/references/airline/aircraft/aircraft-type/client";

export const useFlyCrewUpdateFormData = (flyCrewId: string, enabled = true) => {
  const query = useQuery({
    queryKey: ["fly-crew-update-form-data", flyCrewId],

    enabled: enabled && !!flyCrewId,

    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const [initialData, airlines, roles, duties, aircraftTypeData] =
        await Promise.all([
          FlyCrewService.getOne(flyCrewId),
          FlyAirlineService.getMany(),
          FlyCrewRoleService.getMany(),
          FlyCrewDutyService.getMany(),
          FlyAircraftTypeService.getMany(),
        ]);

      return {
        initialData,
        airlines,
        roles,
        duties,
        aircraftTypeData,
      };
    },
  });

  return {
    data: query.data,

    isLoading: query.isLoading,
    isFetching: query.isFetching,

    isError: query.isError,
    // Chỉ có 1 nguồn dữ liệu (Promise.all gộp chung, gồm cả
    // initialData) nên chỉ có 1 key, đặt tên "crew" cho nhất quán
    // với entity.
    errors: {
      crew: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};
