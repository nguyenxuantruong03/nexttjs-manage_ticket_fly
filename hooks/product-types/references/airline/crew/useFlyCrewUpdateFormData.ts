"use client";

import { useQuery } from "@tanstack/react-query";

import { FlyAirlineService } from "@/services/product-types/references/airline/client";
import { FlyCrewService } from "@/services/product-types/references/airline/crew/client";
import { FlyCrewRoleService } from "@/services/product-types/references/airline/crew/crew-role/client";
import { FlyCrewDutyService } from "@/services/product-types/references/airline/crew/crew-duty/client";
import { FlyAircraftTypeService } from "@/services/product-types/references/airline/aircraft/aircraft-type/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

export const useFlyCrewUpdateFormData = (flyCrewId: string, enabled = true) => {
  const query = useQuery({
    queryKey: ["fly-crew-update-form-data", flyCrewId],
    enabled: enabled && Boolean(flyCrewId),
    staleTime: DEFAULT_QUERY_STALE_TIME,

    queryFn: async () => {
      const [initialData, airlines, roles, duties, aircraftTypeData] =
        await Promise.all([
          FlyCrewService.getOne(flyCrewId),
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

    errors: {
      crew: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};
