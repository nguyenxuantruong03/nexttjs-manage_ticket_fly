"use client";

import { PlaceService } from "@/services/location/place/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const placeQueryKeys = {
  all: ["place"] as const,
  list: () => [...placeQueryKeys.all, "list"] as const,
  detail: (id: string) => [...placeQueryKeys.all, "detail", id] as const,
};

export function usePlaces(enabled = true) {
  return useQuery({
    queryKey: placeQueryKeys.list(),
    queryFn: () => PlaceService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function usePlace(id: string, enabled = true) {
  return useQuery({
    queryKey: placeQueryKeys.detail(id),
    queryFn: () => PlaceService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

export function useCreatePlace() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof PlaceService.create>[0]) =>
      PlaceService.create(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: placeQueryKeys.list() });
    },
  });
}

export function useUpdatePlace() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof PlaceService.update>[1];
    }) => PlaceService.update(id, data),
    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: placeQueryKeys.list() }),
        queryClient.invalidateQueries({
          queryKey: placeQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

export function useDeletePlace() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => PlaceService.delete(id),
    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: placeQueryKeys.list() }),
        queryClient.removeQueries({ queryKey: placeQueryKeys.detail(id) }),
      ]);
    },
  });
}
