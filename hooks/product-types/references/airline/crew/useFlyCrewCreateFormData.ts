"use client";

import { useQuery } from "@tanstack/react-query";

import { FlyAirlineService } from "@/services/product-types/references/airline/client";
import { FlyCrewRoleService } from "@/services/product-types/references/airline/crew/crew-role/client";
import { FlyCrewDutyService } from "@/services/product-types/references/airline/crew/crew-duty/client";
import { FlyAircraftTypeService } from "@/services/product-types/references/airline/aircraft/aircraft-type/client";

export const useFlyCrewCreateFormData = (enabled = true) => {
  const query = useQuery({
    queryKey: ["fly-crew-create-form-data"],

    enabled,

    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const [airlines, roles, duties,aircraftTypeData] = await Promise.all([
        FlyAirlineService.getMany(),
        FlyCrewRoleService.getMany(),
        FlyCrewDutyService.getMany(),
        FlyAircraftTypeService.getMany(),
      ]);

      return {
        airlines,
        roles,
        duties,
        aircraftTypeData
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
