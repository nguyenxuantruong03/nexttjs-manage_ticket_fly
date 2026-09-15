"use client";

import { useQuery } from "@tanstack/react-query";

import { FlyAddonTypeService } from "@/services/product-types/references/airline/addon-type/client";

import { DEFAULT_QUERY_STALE_TIME } from "@/config/react-query.config";

export const useFlyAddonTypeUpdateFormData = (
  flyAddonTypeId: string,
  enabled = true,
) => {
  const query = useQuery({
    queryKey: ["fly-addon-type-update-form-data", flyAddonTypeId],
    enabled: enabled && Boolean(flyAddonTypeId),
    staleTime: DEFAULT_QUERY_STALE_TIME,

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
    isLoading: query.isLoading,
    isFetching: query.isFetching,
    isError: query.isError,

    errors: {
      addonType: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};
