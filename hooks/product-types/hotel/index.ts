"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { HotelService } from "@/services/product-types/hotel/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// Query Keys
// ======================================================

export const hotelQueryKeys = {
  all: ["hotel"] as const,

  lists: () => [...hotelQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...hotelQueryKeys.lists(), { page, limit }] as const,

  details: () => [...hotelQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...hotelQueryKeys.details(), id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useHotels(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: hotelQueryKeys.list(page, limit),
    queryFn: () =>
      HotelService.getMany({
        page,
        limit,
      }),
    enabled,
    staleTime: DEFAULT_QUERY_STALE_TIME,
    placeholderData: keepPreviousData,
  });
}

export function useHotel(id: string, enabled = true) {
  return useQuery({
    queryKey: hotelQueryKeys.detail(id),
    queryFn: () => HotelService.getOne(id),
    enabled: enabled && Boolean(id),
    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateHotel() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof HotelService.create>[0]) =>
      HotelService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: hotelQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateHotel() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof HotelService.update>[1];
    }) => HotelService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: hotelQueryKeys.lists(),
        }),
        queryClient.invalidateQueries({
          queryKey: hotelQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteHotel() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => HotelService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: hotelQueryKeys.lists(),
        }),
        queryClient.removeQueries({
          queryKey: hotelQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
