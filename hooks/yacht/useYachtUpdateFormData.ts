"use client";

import { useQuery } from "@tanstack/react-query";

import { YachtService } from "@/services/yacht/client";
import { SearchTagService } from "@/services/search/tag/client";
import { useLocationFormData } from "../location/useLocationFormData";

export const useYachtUpdateFormData = (yachtId: string, enabled = true) => {
  const locationQuery = useLocationFormData(
    ["yacht-location-data"],
    enabled && !!yachtId,
  );

  const yachtQuery = useQuery({
    queryKey: ["yacht-update-form-data", yachtId],
    enabled: enabled && !!yachtId,
    staleTime: 1000 * 60 * 5,
    queryFn: async () => {
      const [initialData, searchTagData] = await Promise.all([
        YachtService.getOne(yachtId),
        SearchTagService.getMany(),
      ]);

      return {
        initialData,
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
