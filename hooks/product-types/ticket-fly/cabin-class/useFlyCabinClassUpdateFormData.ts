"use client";

import { useQuery } from "@tanstack/react-query";

import { FlyCabinClassService } from "@/services/product-types/ticket-fly/cabin-class/client";

export const useFlyCabinClassUpdateFormData = (
  flyCabinClassId: string,
  enabled = true,
) => {
  const query = useQuery({
    queryKey: ["fly-cabin-class-update-form-data", flyCabinClassId],

    enabled: enabled && !!flyCabinClassId,

    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const [initialData] = await Promise.all([
        FlyCabinClassService.getOne(flyCabinClassId),
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
    // initialData) nên chỉ có 1 key, đặt tên "cabinClass" cho nhất
    // quán với entity.
    errors: {
      cabinClass: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};
