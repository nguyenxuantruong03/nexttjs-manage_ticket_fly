"use client";

import { FlyAircraftTypeService } from "@/services/product-types/references/airline/aircraft/aircraft-type/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["fly-aircraft-type"] as const;

export function useFlyAircraftTypes() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => FlyAircraftTypeService.getMany(),
  });
}

export function useFlyAircraftType(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => FlyAircraftTypeService.getOne(id),
    enabled: !!id,
  });
}

export function useCreateFlyAircraftType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: FlyAircraftTypeService.create,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

export function useUpdateFlyAircraftType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof FlyAircraftTypeService.update>[1];
    }) => FlyAircraftTypeService.update(id, data),

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

export function useDeleteFlyAircraftType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: FlyAircraftTypeService.delete,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}
