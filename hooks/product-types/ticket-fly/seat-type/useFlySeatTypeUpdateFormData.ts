"use client";

import { useQuery } from "@tanstack/react-query";

import { FlySeatTypeService } from "@/services/product-types/ticket-fly/seat-type/client";

export const useFlySeatTypeUpdateFormData = (
  flySeatTypeId: string,
  enabled = true,
) => {
  const query = useQuery({
    queryKey: ["fly-seat-type-update-form-data", flySeatTypeId],

    enabled: enabled && !!flySeatTypeId,

    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const [initialData] = await Promise.all([
        FlySeatTypeService.getOne(flySeatTypeId),
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
