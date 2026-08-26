"use client";

import { BusSeatTypeService } from "@/services/product-types/ticket-bus/seat-type/client";
import { useQuery } from "@tanstack/react-query";

export const useBusSeatTypeUpdateFormData = (id: string, enabled = true) => {
  const query = useQuery({
    queryKey: ["bus-seat-type-update-form-data", id],
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const [initialData] = await Promise.all([BusSeatTypeService.getOne(id)]);

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
