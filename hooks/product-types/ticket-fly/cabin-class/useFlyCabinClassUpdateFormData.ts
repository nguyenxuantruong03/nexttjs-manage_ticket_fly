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

    isPending: query.isPending,

    isLoading: query.isLoading,

    isFetching: query.isFetching,

    isError: query.isError,

    error: query.error,

    refetch: query.refetch,
  };
};
