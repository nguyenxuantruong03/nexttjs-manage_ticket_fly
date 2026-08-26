"use client";

import { FlyCrewDutyService } from "@/services/product-types/references/airline/crew/crew-duty/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["fly-crew-duty"] as const;

export function useFlyCrewDuties() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => FlyCrewDutyService.getMany(),
  });
}

export function useFlyCrewDuty(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => FlyCrewDutyService.getOne(id),
    enabled: !!id,
  });
}

export function useCreateFlyCrewDuty() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: FlyCrewDutyService.create,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

export function useUpdateFlyCrewDuty() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof FlyCrewDutyService.update>[1];
    }) => FlyCrewDutyService.update(id, data),

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

export function useDeleteFlyCrewDuty() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: FlyCrewDutyService.delete,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}
