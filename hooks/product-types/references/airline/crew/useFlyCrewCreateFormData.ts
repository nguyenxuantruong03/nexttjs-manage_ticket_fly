"use client";

import { useQuery } from "@tanstack/react-query";

import { FlyAirlineService } from "@/services/product-types/references/airline/client";
import { FlyCrewRoleService } from "@/services/product-types/references/airline/crew/crew-role/client";
import { FlyCrewDutyService } from "@/services/product-types/references/airline/crew/crew-duty/client";
import { FlyAircraftTypeService } from "@/services/product-types/references/airline/aircraft/aircraft-type/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

export const useFlyCrewCreateFormData = (enabled = true) => {
  const query = useQuery({
    queryKey: ["fly-crew-create-form-data"],
    enabled,
    staleTime: DEFAULT_QUERY_STALE_TIME,

    queryFn: async () => {
      const [airlines, roles, duties, aircraftTypeData] = await Promise.all([
        FlyAirlineService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        FlyCrewRoleService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        FlyCrewDutyService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
        FlyAircraftTypeService.getMany({
          page: DEFAULT_PAGE,
          limit: DEFAULT_LIMIT,
        }),
      ]);

      return {
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

    errors: {
      crew: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};
