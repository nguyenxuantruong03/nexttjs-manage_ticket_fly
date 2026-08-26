"use client";
import { HotelRoomCategoryService } from "@/services/product-types/hotel/hotel-room-category/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["hotel-room-category"] as const;

export function useHotelRoomCategories() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => HotelRoomCategoryService.getMany(),
  });
}

export function useHotelRoomCategory(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => HotelRoomCategoryService.getOne(id),
    enabled: !!id,
  });
}

export function useCreateHotelRoomCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: HotelRoomCategoryService.create,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

export function useUpdateHotelRoomCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof HotelRoomCategoryService.update>[1];
    }) => HotelRoomCategoryService.update(id, data),

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

export function useDeleteHotelRoomCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: HotelRoomCategoryService.delete,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}
