"use client";

import { useQuery } from "@tanstack/react-query";

import { TicketFlyService } from "@/services/ticket-fly/client";
import { SearchTagService } from "@/services/search/tag/client";
import { useLocationFormData } from "../location/useLocationFormData";
import { FlyAirportService } from "@/services/ticket-fly/fly-airport/client";

export const useTicketFlyUpdateFormData = (
  ticketFlyId: string,
  enabled = true,
) => {
  const locationQuery = useLocationFormData(
    ["ticket-fly-location-data"],
    enabled && !!ticketFlyId,
  );

  const ticketFlyQuery = useQuery({
    queryKey: ["ticket-fly-update-form-data", ticketFlyId],
    enabled: enabled && !!ticketFlyId,
    staleTime: 1000 * 60 * 5,
    queryFn: async () => {
      const [initialData, searchTagData, flyAiport] = await Promise.all([
        TicketFlyService.getOne(ticketFlyId),
        SearchTagService.getMany(),
        FlyAirportService.getMany(),
      ]);

      return {
        initialData,
        searchTagData,
        flyAiport,
      };
    },
  });

  return {
    data:
      locationQuery.data && ticketFlyQuery.data
        ? {
            ...ticketFlyQuery.data,
            ...locationQuery.data,
          }
        : undefined,

    isPending: locationQuery.isPending || ticketFlyQuery.isPending,
    isLoading: locationQuery.isLoading || ticketFlyQuery.isLoading,
    isFetching: locationQuery.isFetching || ticketFlyQuery.isFetching,
    isError: locationQuery.isError || ticketFlyQuery.isError,
    error: locationQuery.error ?? ticketFlyQuery.error,

    refetch: async () => {
      await Promise.all([locationQuery.refetch(), ticketFlyQuery.refetch()]);
    },
  };
};
