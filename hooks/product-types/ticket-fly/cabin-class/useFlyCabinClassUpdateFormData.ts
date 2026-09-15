"use client";

import { useQuery } from "@tanstack/react-query";

import { FlyCabinClassService } from "@/services/product-types/ticket-fly/cabin-class/client";

import { DEFAULT_QUERY_STALE_TIME } from "@/config/react-query.config";

export const useFlyCabinClassUpdateFormData = (
  flyCabinClassId: string,
  enabled = true,
) => {
  const query = useQuery({
    queryKey: ["fly-cabin-class-update-form-data", flyCabinClassId],
    enabled: enabled && Boolean(flyCabinClassId),
    staleTime: DEFAULT_QUERY_STALE_TIME,

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

    errors: {
      cabinClass: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};
