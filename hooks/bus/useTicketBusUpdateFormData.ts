"use client";

import { useQuery } from "@tanstack/react-query";

import { TicketBusService } from "@/services/ticket-bus/client";
import { SearchTagService } from "@/services/search/tag/client";
import { useLocationFormData } from "../location/useLocationFormData";

export const useTicketBusUpdateFormData = (
  ticketBusId: string,
  enabled = true,
) => {
  const locationQuery = useLocationFormData(
    ["ticket-bus-location-data"],
    enabled && !!ticketBusId,
  );

  const ticketBusQuery = useQuery({
    queryKey: ["ticket-bus-update-form-data", ticketBusId],
    enabled: enabled && !!ticketBusId,
    staleTime: 1000 * 60 * 5,
    queryFn: async () => {
      const [initialData, searchTagData] = await Promise.all([
        TicketBusService.getOne(ticketBusId),
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
      locationQuery.data && ticketBusQuery.data
        ? {
            ...ticketBusQuery.data,
            ...locationQuery.data,
          }
        : undefined,

    isPending: locationQuery.isPending || ticketBusQuery.isPending,
    isLoading: locationQuery.isLoading || ticketBusQuery.isLoading,
    isFetching: locationQuery.isFetching || ticketBusQuery.isFetching,
    isError: locationQuery.isError || ticketBusQuery.isError,
    error: locationQuery.error ?? ticketBusQuery.error,

    refetch: async () => {
      await Promise.all([locationQuery.refetch(), ticketBusQuery.refetch()]);
    },
  };
};
