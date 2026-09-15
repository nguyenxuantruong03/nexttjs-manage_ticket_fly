"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { HotelDiningServiceTypeService } from "@/services/product-types/hotel/hotel-dining-service-type/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// Query Keys
// ======================================================

export const hotelDiningServiceTypeQueryKeys = {
  all: ["hotel-dining-service-type"] as const,

  lists: () => [...hotelDiningServiceTypeQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...hotelDiningServiceTypeQueryKeys.lists(), { page, limit }] as const,

  details: () => [...hotelDiningServiceTypeQueryKeys.all, "detail"] as const,

  detail: (id: string) =>
    [...hotelDiningServiceTypeQueryKeys.details(), id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useHotelDiningServiceTypes(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: hotelDiningServiceTypeQueryKeys.list(page, limit),
    queryFn: () =>
      HotelDiningServiceTypeService.getMany({
        page,
        limit,
      }),
    enabled,
    staleTime: DEFAULT_QUERY_STALE_TIME,
    placeholderData: keepPreviousData,
  });
}

export function useHotelDiningServiceType(id: string, enabled = true) {
  return useQuery({
    queryKey: hotelDiningServiceTypeQueryKeys.detail(id),
    queryFn: () => HotelDiningServiceTypeService.getOne(id),
    enabled: enabled && Boolean(id),
    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateHotelDiningServiceType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (
      data: Parameters<typeof HotelDiningServiceTypeService.create>[0],
    ) => HotelDiningServiceTypeService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: hotelDiningServiceTypeQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateHotelDiningServiceType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof HotelDiningServiceTypeService.update>[1];
    }) => HotelDiningServiceTypeService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: hotelDiningServiceTypeQueryKeys.lists(),
        }),
        queryClient.invalidateQueries({
          queryKey: hotelDiningServiceTypeQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteHotelDiningServiceType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => HotelDiningServiceTypeService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: hotelDiningServiceTypeQueryKeys.lists(),
        }),
        queryClient.removeQueries({
          queryKey: hotelDiningServiceTypeQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
