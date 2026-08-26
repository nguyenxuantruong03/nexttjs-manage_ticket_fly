"use client";

import { FlyAddonTypeService } from "@/services/product-types/references/airline/addon-type/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["fly-addon-type"] as const;

export function useFlyAddonTypes() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => FlyAddonTypeService.getMany(),
  });
}

export function useFlyAddonType(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => FlyAddonTypeService.getOne(id),
    enabled: !!id,
  });
}

export function useCreateFlyAddonType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: FlyAddonTypeService.create,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

export function useUpdateFlyAddonType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof FlyAddonTypeService.update>[1];
    }) => FlyAddonTypeService.update(id, data),

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

export function useDeleteFlyAddonType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: FlyAddonTypeService.delete,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}
