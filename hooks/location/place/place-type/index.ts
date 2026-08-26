"use client";

import { PlaceTypeService } from "@/services/location/place/place-type/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["place-type"] as const;

export function usePlaceTypes() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => PlaceTypeService.getMany(),
  });
}

export function usePlaceType(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => PlaceTypeService.getOne(id),
    enabled: !!id,
  });
}

export function useCreatePlaceType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: PlaceTypeService.create,
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
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

export function useDeletePlaceType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: PlaceTypeService.delete,
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}
