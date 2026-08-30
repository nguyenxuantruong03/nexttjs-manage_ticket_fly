"use client";

import { FlyAllianceService } from "@/services/product-types/references/alliance/client";
import { useQuery } from "@tanstack/react-query";

export const useFlyAllianceUpdateFormData = (
  flyAllianceId: string,
  enabled = true,
) => {
  const query = useQuery({
    queryKey: ["fly-alliance-update-form-data", flyAllianceId],
    enabled: enabled && !!flyAllianceId,
    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const initialData = await FlyAllianceService.getOne(flyAllianceId);

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
    // Chỉ có 1 nguồn dữ liệu (initialData) nên chỉ có 1 key, đặt tên
    // "alliance" cho nhất quán với entity.
    errors: {
      alliance: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};
