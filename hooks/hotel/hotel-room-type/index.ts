"use client";

import { HotelRoomTypeService } from "@/services/hotel/hotel-room-type/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["hotel-room-type"] as const;

// ======================================================
// GET MANY
// ======================================================

export function useHotelRoomTypes() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => HotelRoomTypeService.getMany(),
  });
}

// ======================================================
// GET ONE
// ======================================================

export function useHotelRoomType(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => HotelRoomTypeService.getOne(id),
    enabled: !!id,
  });
}

// ======================================================
// CREATE
// ======================================================

export function useCreateHotelRoomType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: HotelRoomTypeService.create,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

// ======================================================
// UPDATE
// ======================================================

export function useUpdateHotelRoomType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof HotelRoomTypeService.update>[1];
    }) => HotelRoomTypeService.update(id, data),

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

// ======================================================
// DELETE
// ======================================================

export function useDeleteHotelRoomType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: HotelRoomTypeService.delete,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}
