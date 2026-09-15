"use client";

import { useQuery } from "@tanstack/react-query";

import { YachtCrewRoleService } from "@/services/product-types/yacht/crew-role/client";

import { DEFAULT_QUERY_STALE_TIME } from "@/config/react-query.config";

export const useYachtCrewRoleUpdateFormData = (
  yachtCrewRoleId: string,
  enabled = true,
) => {
  const query = useQuery({
    queryKey: ["yacht-crew-role-update-form-data", yachtCrewRoleId],
    enabled: enabled && Boolean(yachtCrewRoleId),
    staleTime: DEFAULT_QUERY_STALE_TIME,

    queryFn: async () => {
      const [initialData] = await Promise.all([
        YachtCrewRoleService.getOne(yachtCrewRoleId),
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
