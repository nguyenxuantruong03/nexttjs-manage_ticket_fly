"use client";

import { useQuery } from "@tanstack/react-query";

import { FlyCrewRoleService } from "@/services/product-types/references/airline/crew/crew-role/client";

import { DEFAULT_QUERY_STALE_TIME } from "@/config/react-query.config";

export const useFlyCrewRoleUpdateFormData = (
  flyCrewRoleId: string,
  enabled = true,
) => {
  const query = useQuery({
    queryKey: ["fly-crew-role-update-form-data", flyCrewRoleId],
    enabled: enabled && Boolean(flyCrewRoleId),
    staleTime: DEFAULT_QUERY_STALE_TIME,

    queryFn: async () => {
      const [initialData] = await Promise.all([
        FlyCrewRoleService.getOne(flyCrewRoleId),
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

    errors: {
      crewRole: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};
