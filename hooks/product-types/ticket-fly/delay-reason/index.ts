"use client";

import { FlyDelayReasonService } from "@/services/product-types/ticket-fly/delay-reason/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["fly-delay-reason"] as const;

export function useFlyDelayReasons() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => FlyDelayReasonService.getMany(),
  });
}

export function useFlyDelayReason(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => FlyDelayReasonService.getOne(id),
    enabled: !!id,
  });
}

export function useCreateFlyDelayReason() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: FlyDelayReasonService.create,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

export function useUpdateFlyDelayReason() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof FlyDelayReasonService.update>[1];
    }) => FlyDelayReasonService.update(id, data),

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

export function useDeleteFlyDelayReason() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: FlyDelayReasonService.delete,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}
