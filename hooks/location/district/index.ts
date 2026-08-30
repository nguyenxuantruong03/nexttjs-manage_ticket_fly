"use client";

import { DistrictService } from "@/services/location/district/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const districtQueryKeys = {
  all: ["district"] as const,
  list: () => [...districtQueryKeys.all, "list"] as const,
  detail: (id: string) => [...districtQueryKeys.all, "detail", id] as const,
};

export function useDistricts(enabled = true) {
  return useQuery({
    queryKey: districtQueryKeys.list(),
    queryFn: () => DistrictService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useDistrict(id: string, enabled = true) {
  return useQuery({
    queryKey: districtQueryKeys.detail(id),
    queryFn: () => DistrictService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

export function useCreateDistrict() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof DistrictService.create>[0]) =>
      DistrictService.create(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: districtQueryKeys.list(),
      });
    },
  });
}

export function useUpdateDistrict() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof DistrictService.update>[1];
    }) => DistrictService.update(id, data),
    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: districtQueryKeys.list() }),
        queryClient.invalidateQueries({
          queryKey: districtQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

export function useDeleteDistrict() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => DistrictService.delete(id),
    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: districtQueryKeys.list() }),
        queryClient.removeQueries({ queryKey: districtQueryKeys.detail(id) }),
      ]);
    },
  });
}
