"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { HotelRoomTypeService } from "@/services/product-types/hotel/hotel-room-type/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// Query Keys
// ======================================================

export const hotelRoomTypeQueryKeys = {
  all: ["hotel-room-type"] as const,

  lists: () => [...hotelRoomTypeQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...hotelRoomTypeQueryKeys.lists(), { page, limit }] as const,

  details: () => [...hotelRoomTypeQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...hotelRoomTypeQueryKeys.details(), id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useHotelRoomTypes(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: hotelRoomTypeQueryKeys.list(page, limit),
    queryFn: () =>
      HotelRoomTypeService.getMany({
        page,
        limit,
      }),
    enabled,
    staleTime: DEFAULT_QUERY_STALE_TIME,
    placeholderData: keepPreviousData,
  });
}

export function useHotelRoomType(id: string, enabled = true) {
  return useQuery({
    queryKey: hotelRoomTypeQueryKeys.detail(id),
    queryFn: () => HotelRoomTypeService.getOne(id),
    enabled: enabled && Boolean(id),
    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateHotelRoomType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof HotelRoomTypeService.create>[0]) =>
      HotelRoomTypeService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: hotelRoomTypeQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// Update
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

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: hotelRoomTypeQueryKeys.lists(),
        }),
        queryClient.invalidateQueries({
          queryKey: hotelRoomTypeQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteHotelRoomType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => HotelRoomTypeService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: hotelRoomTypeQueryKeys.lists(),
        }),
        queryClient.removeQueries({
          queryKey: hotelRoomTypeQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
