"use client";

import { HotelMediaAssetService } from "@/services/hotel/hotel-media-asset/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["hotel-media-asset"] as const;

export function useHotelMediaAssets() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => HotelMediaAssetService.getMany(),
  });
}

export function useHotelMediaAsset(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => HotelMediaAssetService.getOne(id),
    enabled: !!id,
  });
}

export function useCreateHotelMediaAsset() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: HotelMediaAssetService.create,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

export function useUpdateHotelMediaAsset() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof HotelMediaAssetService.update>[1];
    }) => HotelMediaAssetService.update(id, data),

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

export function useDeleteHotelMediaAsset() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: HotelMediaAssetService.delete,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}
