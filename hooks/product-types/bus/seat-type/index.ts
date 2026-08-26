"use client";

import { BusSeatTypeService } from "@/services/product-types/ticket-bus/seat-type/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["bus-seat-type"] as const;

export function useBusSeatTypes() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => BusSeatTypeService.getMany(),
  });
}

export function useBusSeatType(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => BusSeatTypeService.getOne(id),
    enabled: !!id,
  });
}

export function useCreateBusSeatType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: BusSeatTypeService.create,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

export function useUpdateBusSeatType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof BusSeatTypeService.update>[1];
    }) => BusSeatTypeService.update(id, data),

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

export function useDeleteBusSeatType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: BusSeatTypeService.delete,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}
