"use client";

import { useQuery } from "@tanstack/react-query";

import { BusSeatTypeService } from "@/services/product-types/ticket-bus/seat-type/client";

import { DEFAULT_QUERY_STALE_TIME } from "@/config/react-query.config";

export const useBusSeatTypeUpdateFormData = (id: string, enabled = true) => {
  const query = useQuery({
    queryKey: ["bus-seat-type-update-form-data", id],

    enabled: enabled && Boolean(id),

    staleTime: DEFAULT_QUERY_STALE_TIME,

    queryFn: async () => {
      const [initialData] = await Promise.all([BusSeatTypeService.getOne(id)]);

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
