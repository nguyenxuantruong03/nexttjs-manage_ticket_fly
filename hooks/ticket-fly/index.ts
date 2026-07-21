"use client"
import { TicketFlyService } from "@/services/ticket-fly/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["ticket-fly"] as const;

export function useTicketsFly() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => TicketFlyService.getMany(),
  });
}

export function useTicketFly(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => TicketFlyService.getOne(id),
    enabled: !!id,
  });
}

export function useCreateTicketFly() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: TicketFlyService.create,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

export function useUpdateTicketFly() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof TicketFlyService.update>[1];
    }) => TicketFlyService.update(id, data),

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

export function useDeleteTicketFly() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: TicketFlyService.delete,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}
