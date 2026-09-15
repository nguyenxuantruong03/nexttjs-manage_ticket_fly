"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { HotelSustainabilityService } from "@/services/product-types/hotel/hotel-sustainability/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// Query Keys
// ======================================================

export const hotelSustainabilityQueryKeys = {
  all: ["hotel-sustainability"] as const,

  lists: () => [...hotelSustainabilityQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...hotelSustainabilityQueryKeys.lists(), { page, limit }] as const,

  details: () => [...hotelSustainabilityQueryKeys.all, "detail"] as const,

  detail: (id: string) =>
    [...hotelSustainabilityQueryKeys.details(), id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useHotelSustainabilities(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: hotelSustainabilityQueryKeys.list(page, limit),
    queryFn: () =>
      HotelSustainabilityService.getMany({
        page,
        limit,
      }),
    enabled,
    staleTime: DEFAULT_QUERY_STALE_TIME,
    placeholderData: keepPreviousData,
  });
}

export function useHotelSustainability(id: string, enabled = true) {
  return useQuery({
    queryKey: hotelSustainabilityQueryKeys.detail(id),
    queryFn: () => HotelSustainabilityService.getOne(id),
    enabled: enabled && Boolean(id),
    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateHotelSustainability() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (
      data: Parameters<typeof HotelSustainabilityService.create>[0],
    ) => HotelSustainabilityService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: hotelSustainabilityQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateHotelSustainability() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof HotelSustainabilityService.update>[1];
    }) => HotelSustainabilityService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: hotelSustainabilityQueryKeys.lists(),
        }),
        queryClient.invalidateQueries({
          queryKey: hotelSustainabilityQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteHotelSustainability() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => HotelSustainabilityService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: hotelSustainabilityQueryKeys.lists(),
        }),
        queryClient.removeQueries({
          queryKey: hotelSustainabilityQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
