"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { VehicleTypeService } from "@/services/catalog/vehicle-type/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// QUERY KEYS
// ======================================================

export const vehicleTypeQueryKeys = {
  all: ["vehicle-type"] as const,

  lists: () => [...vehicleTypeQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...vehicleTypeQueryKeys.lists(), { page, limit }] as const,

  details: () => [...vehicleTypeQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...vehicleTypeQueryKeys.details(), id] as const,
};

// ======================================================
// FIND ALL
// ======================================================

export function useVehicleTypes(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: vehicleTypeQueryKeys.list(page, limit),

    queryFn: () =>
      VehicleTypeService.getMany({
        page,
        limit,
      }),

    enabled,

    staleTime: DEFAULT_QUERY_STALE_TIME,

    placeholderData: keepPreviousData,
  });
}

// ======================================================
// FIND ONE
// ======================================================

export function useVehicleType(id: string, enabled = true) {
  return useQuery({
    queryKey: vehicleTypeQueryKeys.detail(id),

    queryFn: () => VehicleTypeService.getOne(id),

    enabled: enabled && Boolean(id),

    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// CREATE
// ======================================================

export function useCreateVehicleType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof VehicleTypeService.create>[0]) =>
      VehicleTypeService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: vehicleTypeQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// UPDATE
// ======================================================

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

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: vehicleTypeQueryKeys.lists(),
        }),

        queryClient.invalidateQueries({
          queryKey: vehicleTypeQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// DELETE
// ======================================================

export function useDeleteVehicleType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => VehicleTypeService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: vehicleTypeQueryKeys.lists(),
        }),

        queryClient.removeQueries({
          queryKey: vehicleTypeQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
