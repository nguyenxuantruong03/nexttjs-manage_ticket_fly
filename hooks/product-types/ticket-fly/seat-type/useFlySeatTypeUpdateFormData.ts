"use client";

import { useQuery } from "@tanstack/react-query";

import { FlySeatTypeService } from "@/services/product-types/ticket-fly/seat-type/client";

import { DEFAULT_QUERY_STALE_TIME } from "@/config/react-query.config";

export const useFlySeatTypeUpdateFormData = (
  flySeatTypeId: string,
  enabled = true,
) => {
  const query = useQuery({
    queryKey: ["fly-seat-type-update-form-data", flySeatTypeId],
    enabled: enabled && Boolean(flySeatTypeId),
    staleTime: DEFAULT_QUERY_STALE_TIME,

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
    isLoading: query.isLoading,
    isFetching: query.isFetching,
    isError: query.isError,

    errors: {
      seatType: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};
