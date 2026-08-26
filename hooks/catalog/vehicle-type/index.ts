"use client";

import { VehicleTypeService } from "@/services/catalog/vehicle-type/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["vehicle-type"] as const;

export function useVehicleTypes() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => VehicleTypeService.getMany(),
  });
}

export function useVehicleType(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => VehicleTypeService.getOne(id),
    enabled: !!id,
  });
}

export function useCreateVehicleType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: VehicleTypeService.create,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

export function useUpdateVehicleType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof VehicleTypeService.update>[1];
    }) => VehicleTypeService.update(id, data),

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

export function useDeleteVehicleType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: VehicleTypeService.delete,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}
