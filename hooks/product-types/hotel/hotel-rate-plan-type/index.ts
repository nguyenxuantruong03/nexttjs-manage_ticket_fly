"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { HotelRatePlanTypeService } from "@/services/product-types/hotel/hotel-rate-plan-type/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// Query Keys
// ======================================================

export const hotelRatePlanTypeQueryKeys = {
  all: ["hotel-rate-plan-type"] as const,

  lists: () => [...hotelRatePlanTypeQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...hotelRatePlanTypeQueryKeys.lists(), { page, limit }] as const,

  details: () => [...hotelRatePlanTypeQueryKeys.all, "detail"] as const,

  detail: (id: string) =>
    [...hotelRatePlanTypeQueryKeys.details(), id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useHotelRatePlanTypes(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: hotelRatePlanTypeQueryKeys.list(page, limit),
    queryFn: () =>
      HotelRatePlanTypeService.getMany({
        page,
        limit,
      }),
    enabled,
    staleTime: DEFAULT_QUERY_STALE_TIME,
    placeholderData: keepPreviousData,
  });
}

export function useHotelRatePlanType(id: string, enabled = true) {
  return useQuery({
    queryKey: hotelRatePlanTypeQueryKeys.detail(id),
    queryFn: () => HotelRatePlanTypeService.getOne(id),
    enabled: enabled && Boolean(id),
    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateHotelRatePlanType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (
      data: Parameters<typeof HotelRatePlanTypeService.create>[0],
    ) => HotelRatePlanTypeService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: hotelRatePlanTypeQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateHotelRatePlanType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof HotelRatePlanTypeService.update>[1];
    }) => HotelRatePlanTypeService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: hotelRatePlanTypeQueryKeys.lists(),
        }),
        queryClient.invalidateQueries({
          queryKey: hotelRatePlanTypeQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteHotelRatePlanType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => HotelRatePlanTypeService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: hotelRatePlanTypeQueryKeys.lists(),
        }),
        queryClient.removeQueries({
          queryKey: hotelRatePlanTypeQueryKeys.detail(id),
        }),
      ]);
    },
  });
}