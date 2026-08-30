"use client";

import { PlaceTypeService } from "@/services/location/place/place-type/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const placeTypeQueryKeys = {
  all: ["place-type"] as const,
  list: () => [...placeTypeQueryKeys.all, "list"] as const,
  detail: (id: string) => [...placeTypeQueryKeys.all, "detail", id] as const,
};

export function usePlaceTypes(enabled = true) {
  return useQuery({
    queryKey: placeTypeQueryKeys.list(),
    queryFn: () => PlaceTypeService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function usePlaceType(id: string, enabled = true) {
  return useQuery({
    queryKey: placeTypeQueryKeys.detail(id),
    queryFn: () => PlaceTypeService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

export function useCreatePlaceType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof PlaceTypeService.create>[0]) =>
      PlaceTypeService.create(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: placeTypeQueryKeys.list(),
      });
    },
  });
}

export function useUpdatePlaceType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof PlaceTypeService.update>[1];
    }) => PlaceTypeService.update(id, data),
    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: placeTypeQueryKeys.list() }),
        queryClient.invalidateQueries({
          queryKey: placeTypeQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

export function useDeletePlaceType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => PlaceTypeService.delete(id),
    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: placeTypeQueryKeys.list() }),
        queryClient.removeQueries({ queryKey: placeTypeQueryKeys.detail(id) }),
      ]);
    },
  });
}
