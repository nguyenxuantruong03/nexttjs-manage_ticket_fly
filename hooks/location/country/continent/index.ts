"use client";

import { ContinentService } from "@/services/location/country/continent/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const continentQueryKeys = {
  all: ["continent"] as const,
  list: () => [...continentQueryKeys.all, "list"] as const,
  detail: (id: string) => [...continentQueryKeys.all, "detail", id] as const,
};

export function useContinents(enabled = true) {
  return useQuery({
    queryKey: continentQueryKeys.list(),
    queryFn: () => ContinentService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useContinent(id: string, enabled = true) {
  return useQuery({
    queryKey: continentQueryKeys.detail(id),
    queryFn: () => ContinentService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

export function useCreateContinent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof ContinentService.create>[0]) =>
      ContinentService.create(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: continentQueryKeys.list(),
      });
    },
  });
}

export function useUpdateContinent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof ContinentService.update>[1];
    }) => ContinentService.update(id, data),
    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: continentQueryKeys.list() }),
        queryClient.invalidateQueries({
          queryKey: continentQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

export function useDeleteContinent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => ContinentService.delete(id),
    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: continentQueryKeys.list() }),
        queryClient.removeQueries({ queryKey: continentQueryKeys.detail(id) }),
      ]);
    },
  });
}
