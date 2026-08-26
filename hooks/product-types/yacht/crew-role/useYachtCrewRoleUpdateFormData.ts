"use client";

import { useQuery } from "@tanstack/react-query";

import { YachtCrewRoleService } from "@/services/product-types/yacht/crew-role/client";

export const useYachtCrewRoleUpdateFormData = (
  yachtCrewRoleId: string,
  enabled = true,
) => {
  const query = useQuery({
    queryKey: ["yacht-crew-role-update-form-data", yachtCrewRoleId],
    enabled: enabled && !!yachtCrewRoleId,
    staleTime: 1000 * 60 * 5,

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

    isPending: query.isPending,
    isLoading: query.isLoading,
    isFetching: query.isFetching,
    isError: query.isError,
    error: query.error,

    refetch: query.refetch,
  };
};