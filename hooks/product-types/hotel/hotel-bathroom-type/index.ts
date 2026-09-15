"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { HotelBathroomTypeService } from "@/services/product-types/hotel/hotel-bathroom-type/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// Query Keys
// ======================================================

export const hotelBathroomTypeQueryKeys = {
  all: ["hotel-bathroom-type"] as const,

  lists: () => [...hotelBathroomTypeQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...hotelBathroomTypeQueryKeys.lists(), { page, limit }] as const,

  details: () => [...hotelBathroomTypeQueryKeys.all, "detail"] as const,

  detail: (id: string) =>
    [...hotelBathroomTypeQueryKeys.details(), id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useHotelBathroomTypes(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: hotelBathroomTypeQueryKeys.list(page, limit),
    queryFn: () =>
      HotelBathroomTypeService.getMany({
        page,
        limit,
      }),
    enabled,
    staleTime: DEFAULT_QUERY_STALE_TIME,
    placeholderData: keepPreviousData,
  });
}

export function useHotelBathroomType(id: string, enabled = true) {
  return useQuery({
    queryKey: hotelBathroomTypeQueryKeys.detail(id),
    queryFn: () => HotelBathroomTypeService.getOne(id),
    enabled: enabled && Boolean(id),
    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateHotelBathroomType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof HotelBathroomTypeService.create>[0]) =>
      HotelBathroomTypeService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: hotelBathroomTypeQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateHotelBathroomType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof HotelBathroomTypeService.update>[1];
    }) => HotelBathroomTypeService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: hotelBathroomTypeQueryKeys.lists(),
        }),
        queryClient.invalidateQueries({
          queryKey: hotelBathroomTypeQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteHotelBathroomType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => HotelBathroomTypeService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: hotelBathroomTypeQueryKeys.lists(),
        }),
        queryClient.removeQueries({
          queryKey: hotelBathroomTypeQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
