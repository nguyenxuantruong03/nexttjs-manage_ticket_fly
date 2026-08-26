"use client";

import { useQuery } from "@tanstack/react-query";

import { FlyAddonTypeService } from "@/services/product-types/references/airline/addon-type/client";

export const useFlyAddonTypeUpdateFormData = (
  flyAddonTypeId: string,
  enabled = true,
) => {
  const query = useQuery({
    queryKey: ["fly-addon-type-update-form-data", flyAddonTypeId],
    enabled: enabled && !!flyAddonTypeId,
    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const [initialData] = await Promise.all([
        FlyAddonTypeService.getOne(flyAddonTypeId),
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
