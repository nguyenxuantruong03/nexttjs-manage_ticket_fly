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

    isLoading: query.isLoading,
    isFetching: query.isFetching,

    isError: query.isError,
    // Chỉ có 1 nguồn dữ liệu (Promise.all gộp chung, gồm cả
    // initialData) nên chỉ có 1 key, đặt tên "seatType" cho nhất
    // quán với entity.
    errors: {
      seatType: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};
