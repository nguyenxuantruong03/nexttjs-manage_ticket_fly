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

    isLoading: query.isLoading,
    isFetching: query.isFetching,

    isError: query.isError,
    // Chỉ có 1 nguồn dữ liệu (Promise.all gộp chung, gồm cả
    // initialData) nên chỉ có 1 key, đặt tên "addonType" cho nhất
    // quán với entity.
    errors: {
      addonType: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};