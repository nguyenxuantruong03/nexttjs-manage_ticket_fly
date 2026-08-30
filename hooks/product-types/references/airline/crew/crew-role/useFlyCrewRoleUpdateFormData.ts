"use client";

import { useQuery } from "@tanstack/react-query";

import { FlyCrewRoleService } from "@/services/product-types/references/airline/crew/crew-role/client";

export const useFlyCrewRoleUpdateFormData = (
  flyCrewRoleId: string,
  enabled = true,
) => {
  const query = useQuery({
    queryKey: ["fly-crew-role-update-form-data", flyCrewRoleId],

    enabled: enabled && !!flyCrewRoleId,

    staleTime: 1000 * 60 * 5,

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
    // Chỉ có 1 nguồn dữ liệu (Promise.all gộp chung, gồm cả
    // initialData) nên chỉ có 1 key, đặt tên "crewRole" cho nhất
    // quán với entity.
    errors: {
      crewRole: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};
