"use client";

import { FlyAllianceService } from "@/services/product-types/references/alliance/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["fly-alliance"] as const;

export function useFlyAlliances() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => FlyAllianceService.getMany(),
  });
}

export function useFlyAlliance(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => FlyAllianceService.getOne(id),
    enabled: !!id,
  });
}

export function useCreateFlyAlliance() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: FlyAllianceService.create,
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

export function useUpdateFlyAlliance() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof FlyAllianceService.update>[1];
    }) => FlyAllianceService.update(id, data),

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

export function useDeleteFlyAlliance() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: FlyAllianceService.delete,
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}
