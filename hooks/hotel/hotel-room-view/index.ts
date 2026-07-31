"use client";
import { HotelRoomViewService } from "@/services/hotel/hotel-room-view/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["hotel-room-view"] as const;

export function useHotelRoomViews() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => HotelRoomViewService.getMany(),
  });
}

export function useHotelRoomView(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => HotelRoomViewService.getOne(id),
    enabled: !!id,
  });
}

export function useCreateHotelRoomView() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: HotelRoomViewService.create,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

export function useUpdateHotelRoomView() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof HotelRoomViewService.update>[1];
    }) => HotelRoomViewService.update(id, data),

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

export function useDeleteHotelRoomView() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: HotelRoomViewService.delete,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}
