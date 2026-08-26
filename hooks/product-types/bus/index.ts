"use client";
import { TicketBusService } from "@/services/product-types/ticket-bus/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["bus"] as const;

export function useBuses() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => TicketBusService.getMany(),
  });
}

export function useBus(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => TicketBusService.getOne(id),
    enabled: !!id,
  });
}

export function useCreateBus() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: TicketBusService.create,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

export function useUpdateBus() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof TicketBusService.update>[1];
    }) => TicketBusService.update(id, data),

    onSuccess(_, variables) {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });

      queryClient.invalidateQueries({
        queryKey: [...QUERY_KEY, variables.id],
      });
    },
  });
}

export function useDeleteBus() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: TicketBusService.delete,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}
