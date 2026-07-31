"use client";

import { useQuery } from "@tanstack/react-query";

import { SearchTagService } from "@/services/search/tag/client";
import { useLocationFormData } from "../location/useLocationFormData";

export const useYachtCreateFormData = (enabled = true) => {
  const locationQuery = useLocationFormData(["yacht-location-data"], enabled);

  const yachtQuery = useQuery({
    queryKey: ["yacht-create-form-data"],
    enabled,
    staleTime: 1000 * 60 * 5,
    queryFn: async () => {
      const searchTagData = await SearchTagService.getMany();

      return {
        searchTagData,
      };
    },
  });

  return {
    data:
      locationQuery.data && yachtQuery.data
        ? {
            ...yachtQuery.data,
            ...locationQuery.data,
          }
        : undefined,

    isPending: locationQuery.isPending || yachtQuery.isPending,
    isLoading: locationQuery.isLoading || yachtQuery.isLoading,
    isFetching: locationQuery.isFetching || yachtQuery.isFetching,
    isError: locationQuery.isError || yachtQuery.isError,
    error: locationQuery.error ?? yachtQuery.error,

    refetch: async () => {
      await Promise.all([locationQuery.refetch(), yachtQuery.refetch()]);
    },
  };
};
