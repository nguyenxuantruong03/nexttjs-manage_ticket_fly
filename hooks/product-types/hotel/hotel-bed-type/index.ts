"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { HotelBedTypeService } from "@/services/product-types/hotel/hotel-bed-type/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// Query Keys
// ======================================================

export const hotelBedTypeQueryKeys = {
  all: ["hotel-bed-type"] as const,

  lists: () => [...hotelBedTypeQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...hotelBedTypeQueryKeys.lists(), { page, limit }] as const,

  details: () => [...hotelBedTypeQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...hotelBedTypeQueryKeys.details(), id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useHotelBedTypes(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: hotelBedTypeQueryKeys.list(page, limit),
    queryFn: () =>
      HotelBedTypeService.getMany({
        page,
        limit,
      }),
    enabled,
    staleTime: DEFAULT_QUERY_STALE_TIME,
    placeholderData: keepPreviousData,
  });
}

export function useHotelBedType(id: string, enabled = true) {
  return useQuery({
    queryKey: hotelBedTypeQueryKeys.detail(id),
    queryFn: () => HotelBedTypeService.getOne(id),
    enabled: enabled && Boolean(id),
    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateHotelBedType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof HotelBedTypeService.create>[0]) =>
      HotelBedTypeService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: hotelBedTypeQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateHotelBedType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof HotelBedTypeService.update>[1];
    }) => HotelBedTypeService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: hotelBedTypeQueryKeys.lists(),
        }),
        queryClient.invalidateQueries({
          queryKey: hotelBedTypeQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteHotelBedType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => HotelBedTypeService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: hotelBedTypeQueryKeys.lists(),
        }),
        queryClient.removeQueries({
          queryKey: hotelBedTypeQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
