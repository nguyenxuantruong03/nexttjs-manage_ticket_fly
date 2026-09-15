"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { HotelRoomCategoryService } from "@/services/product-types/hotel/hotel-room-category/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// Query Keys
// ======================================================

export const hotelRoomCategoryQueryKeys = {
  all: ["hotel-room-category"] as const,

  lists: () => [...hotelRoomCategoryQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...hotelRoomCategoryQueryKeys.lists(), { page, limit }] as const,

  details: () => [...hotelRoomCategoryQueryKeys.all, "detail"] as const,

  detail: (id: string) =>
    [...hotelRoomCategoryQueryKeys.details(), id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useHotelRoomCategories(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: hotelRoomCategoryQueryKeys.list(page, limit),
    queryFn: () =>
      HotelRoomCategoryService.getMany({
        page,
        limit,
      }),
    enabled,
    staleTime: DEFAULT_QUERY_STALE_TIME,
    placeholderData: keepPreviousData,
  });
}

export function useHotelRoomCategory(id: string, enabled = true) {
  return useQuery({
    queryKey: hotelRoomCategoryQueryKeys.detail(id),
    queryFn: () => HotelRoomCategoryService.getOne(id),
    enabled: enabled && Boolean(id),
    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateHotelRoomCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof HotelRoomCategoryService.create>[0]) =>
      HotelRoomCategoryService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: hotelRoomCategoryQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

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

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: hotelRoomCategoryQueryKeys.lists(),
        }),
        queryClient.invalidateQueries({
          queryKey: hotelRoomCategoryQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteHotelRoomCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => HotelRoomCategoryService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: hotelRoomCategoryQueryKeys.lists(),
        }),
        queryClient.removeQueries({
          queryKey: hotelRoomCategoryQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
