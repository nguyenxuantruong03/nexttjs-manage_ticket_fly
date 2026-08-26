"use client";

import { FlySeatTypeService } from "@/services/product-types/ticket-fly/seat-type/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["fly-seat-type"] as const;

export function useFlySeatTypes() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => FlySeatTypeService.getMany(),
  });
}

export function useFlySeatType(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => FlySeatTypeService.getOne(id),
    enabled: !!id,
  });
}

export function useCreateFlySeatType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: FlySeatTypeService.create,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

export function useUpdateFlySeatType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof FlySeatTypeService.update>[1];
    }) => FlySeatTypeService.update(id, data),

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

export function useDeleteFlySeatType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: FlySeatTypeService.delete,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}