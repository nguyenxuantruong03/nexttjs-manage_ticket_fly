"use client";

import { CityService } from "@/services/location/city/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const cityQueryKeys = {
  all: ["city"] as const,
  list: () => [...cityQueryKeys.all, "list"] as const,
  detail: (id: string) => [...cityQueryKeys.all, "detail", id] as const,
};

export function useCities(enabled = true) {
  return useQuery({
    queryKey: cityQueryKeys.list(),
    queryFn: () => CityService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useCity(id: string, enabled = true) {
  return useQuery({
    queryKey: cityQueryKeys.detail(id),
    queryFn: () => CityService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

export function useCreateCity() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof CityService.create>[0]) =>
      CityService.create(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: cityQueryKeys.list() });
    },
  });
}

export function useUpdateCity() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof CityService.update>[1];
    }) => CityService.update(id, data),
    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: cityQueryKeys.list() }),
        queryClient.invalidateQueries({
          queryKey: cityQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

export function useDeleteCity() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => CityService.delete(id),
    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: cityQueryKeys.list() }),
        queryClient.removeQueries({ queryKey: cityQueryKeys.detail(id) }),
      ]);
    },
  });
}
