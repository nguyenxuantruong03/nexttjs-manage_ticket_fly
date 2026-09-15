"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { HotelBrandService } from "@/services/product-types/hotel/hotel-brand/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// Query Keys
// ======================================================

export const hotelBrandQueryKeys = {
  all: ["hotel-brand"] as const,

  lists: () => [...hotelBrandQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...hotelBrandQueryKeys.lists(), { page, limit }] as const,

  details: () => [...hotelBrandQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...hotelBrandQueryKeys.details(), id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useHotelBrands(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: hotelBrandQueryKeys.list(page, limit),
    queryFn: () =>
      HotelBrandService.getMany({
        page,
        limit,
      }),
    enabled,
    staleTime: DEFAULT_QUERY_STALE_TIME,
    placeholderData: keepPreviousData,
  });
}

export function useHotelBrand(id: string, enabled = true) {
  return useQuery({
    queryKey: hotelBrandQueryKeys.detail(id),
    queryFn: () => HotelBrandService.getOne(id),
    enabled: enabled && Boolean(id),
    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateHotelBrand() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof HotelBrandService.create>[0]) =>
      HotelBrandService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: hotelBrandQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateHotelBrand() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof HotelBrandService.update>[1];
    }) => HotelBrandService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: hotelBrandQueryKeys.lists(),
        }),
        queryClient.invalidateQueries({
          queryKey: hotelBrandQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteHotelBrand() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => HotelBrandService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: hotelBrandQueryKeys.lists(),
        }),
        queryClient.removeQueries({
          queryKey: hotelBrandQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
