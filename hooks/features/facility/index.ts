"use client";

import { FacilityService } from "@/services/features/facility/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const facilityQueryKeys = {
  all: ["facility"] as const,
  list: () => [...facilityQueryKeys.all, "list"] as const,
  detail: (id: string) => [...facilityQueryKeys.all, "detail", id] as const,
};

export function useFacilities(enabled = true) {
  return useQuery({
    queryKey: facilityQueryKeys.list(),
    queryFn: () => FacilityService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useFacility(id: string, enabled = true) {
  return useQuery({
    queryKey: facilityQueryKeys.detail(id),
    queryFn: () => FacilityService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

export function useCreateFacility() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof FacilityService.create>[0]) =>
      FacilityService.create(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: facilityQueryKeys.list(),
      });
    },
  });
}

export function useUpdateFacility() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof FacilityService.update>[1];
    }) => FacilityService.update(id, data),
    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: facilityQueryKeys.list() }),
        queryClient.invalidateQueries({
          queryKey: facilityQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

export function useDeleteFacility() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => FacilityService.delete(id),
    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: facilityQueryKeys.list() }),
        queryClient.removeQueries({ queryKey: facilityQueryKeys.detail(id) }),
      ]);
    },
  });
}
