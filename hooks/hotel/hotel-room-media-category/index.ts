"use client";
import { HotelRoomMediaCategoryService } from "@/services/hotel/hotel-room-media-category/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["hotel-room-media-category"] as const;

export function useHotelRoomMediaCategories() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => HotelRoomMediaCategoryService.getMany(),
  });
}

export function useHotelRoomMediaCategory(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => HotelRoomMediaCategoryService.getOne(id),
    enabled: !!id,
  });
}

export function useCreateHotelRoomMediaCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: HotelRoomMediaCategoryService.create,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

export function useUpdateHotelRoomMediaCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof HotelRoomMediaCategoryService.update>[1];
    }) => HotelRoomMediaCategoryService.update(id, data),

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

export function useDeleteHotelRoomMediaCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: HotelRoomMediaCategoryService.delete,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}
