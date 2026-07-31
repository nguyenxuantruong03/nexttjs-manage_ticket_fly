"use client";

import { useQuery } from "@tanstack/react-query";

import { SearchTagService } from "@/services/search/tag/client";
import { useLocationFormData } from "../location/useLocationFormData";

export const useTicketBusCreateFormData = (enabled = true) => {
  const locationQuery = useLocationFormData(
    ["ticket-bus-location-data"],
    enabled,
  );

  const tagQuery = useQuery({
    queryKey: ["search-tags"],
    enabled,
    queryFn: SearchTagService.getMany,
  });

  return {
    data:
      locationQuery.data && tagQuery.data
        ? {
            ...locationQuery.data,
            searchTagData: tagQuery.data,
          }
        : undefined,

    isPending: locationQuery.isPending || tagQuery.isPending,
    isLoading: locationQuery.isLoading || tagQuery.isLoading,
    isFetching: locationQuery.isFetching || tagQuery.isFetching,
    isError: locationQuery.isError || tagQuery.isError,
    error: locationQuery.error ?? tagQuery.error,

    refetch: async () => {
      await Promise.all([locationQuery.refetch(), tagQuery.refetch()]);
    },
  };
};
