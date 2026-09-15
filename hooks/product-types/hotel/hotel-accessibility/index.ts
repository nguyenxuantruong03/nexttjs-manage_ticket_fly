"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { HotelAccessibilityService } from "@/services/product-types/hotel/hotel-accessibility/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// Query Keys
// ======================================================

export const hotelAccessibilityQueryKeys = {
  all: ["hotel-accessibility"] as const,

  lists: () => [...hotelAccessibilityQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...hotelAccessibilityQueryKeys.lists(), { page, limit }] as const,

  details: () => [...hotelAccessibilityQueryKeys.all, "detail"] as const,

  detail: (id: string) =>
    [...hotelAccessibilityQueryKeys.details(), id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useHotelAccessibilities(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: hotelAccessibilityQueryKeys.list(page, limit),

    queryFn: () =>
      HotelAccessibilityService.getMany({
        page,
        limit,
      }),

    enabled,

    staleTime: DEFAULT_QUERY_STALE_TIME,

    placeholderData: keepPreviousData,
  });
}

export function useHotelAccessibility(id: string, enabled = true) {
  return useQuery({
    queryKey: hotelAccessibilityQueryKeys.detail(id),

    queryFn: () => HotelAccessibilityService.getOne(id),

    enabled: enabled && Boolean(id),

    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateHotelAccessibility() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (
      data: Parameters<typeof HotelAccessibilityService.create>[0],
    ) => HotelAccessibilityService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: hotelAccessibilityQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateHotelAccessibility() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof HotelAccessibilityService.update>[1];
    }) => HotelAccessibilityService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: hotelAccessibilityQueryKeys.lists(),
        }),

        queryClient.invalidateQueries({
          queryKey: hotelAccessibilityQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteHotelAccessibility() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => HotelAccessibilityService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: hotelAccessibilityQueryKeys.lists(),
        }),

        queryClient.removeQueries({
          queryKey: hotelAccessibilityQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
