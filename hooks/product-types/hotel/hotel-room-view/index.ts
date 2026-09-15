"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { HotelRoomViewService } from "@/services/product-types/hotel/hotel-room-view/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// Query Keys
// ======================================================

export const hotelRoomViewQueryKeys = {
  all: ["hotel-room-view"] as const,

  lists: () => [...hotelRoomViewQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...hotelRoomViewQueryKeys.lists(), { page, limit }] as const,

  details: () => [...hotelRoomViewQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...hotelRoomViewQueryKeys.details(), id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useHotelRoomViews(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: hotelRoomViewQueryKeys.list(page, limit),
    queryFn: () =>
      HotelRoomViewService.getMany({
        page,
        limit,
      }),
    enabled,
    staleTime: DEFAULT_QUERY_STALE_TIME,
    placeholderData: keepPreviousData,
  });
}

export function useHotelRoomView(id: string, enabled = true) {
  return useQuery({
    queryKey: hotelRoomViewQueryKeys.detail(id),
    queryFn: () => HotelRoomViewService.getOne(id),
    enabled: enabled && Boolean(id),
    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateHotelRoomView() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof HotelRoomViewService.create>[0]) =>
      HotelRoomViewService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: hotelRoomViewQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

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

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: hotelRoomViewQueryKeys.lists(),
        }),
        queryClient.invalidateQueries({
          queryKey: hotelRoomViewQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteHotelRoomView() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => HotelRoomViewService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: hotelRoomViewQueryKeys.lists(),
        }),
        queryClient.removeQueries({
          queryKey: hotelRoomViewQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
