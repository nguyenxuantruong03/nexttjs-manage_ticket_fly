"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { HotelCheckInPolicyService } from "@/services/product-types/hotel/hotel-check-in-policy/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// Query Keys
// ======================================================

export const hotelCheckInPolicyQueryKeys = {
  all: ["hotel-check-in-policy"] as const,

  lists: () => [...hotelCheckInPolicyQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...hotelCheckInPolicyQueryKeys.lists(), { page, limit }] as const,

  details: () => [...hotelCheckInPolicyQueryKeys.all, "detail"] as const,

  detail: (id: string) =>
    [...hotelCheckInPolicyQueryKeys.details(), id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useHotelCheckInPolicies(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: hotelCheckInPolicyQueryKeys.list(page, limit),
    queryFn: () =>
      HotelCheckInPolicyService.getMany({
        page,
        limit,
      }),
    enabled,
    staleTime: DEFAULT_QUERY_STALE_TIME,
    placeholderData: keepPreviousData,
  });
}

export function useHotelCheckInPolicy(id: string, enabled = true) {
  return useQuery({
    queryKey: hotelCheckInPolicyQueryKeys.detail(id),
    queryFn: () => HotelCheckInPolicyService.getOne(id),
    enabled: enabled && Boolean(id),
    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateHotelCheckInPolicy() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (
      data: Parameters<typeof HotelCheckInPolicyService.create>[0],
    ) => HotelCheckInPolicyService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: hotelCheckInPolicyQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateHotelCheckInPolicy() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof HotelCheckInPolicyService.update>[1];
    }) => HotelCheckInPolicyService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: hotelCheckInPolicyQueryKeys.lists(),
        }),
        queryClient.invalidateQueries({
          queryKey: hotelCheckInPolicyQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteHotelCheckInPolicy() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => HotelCheckInPolicyService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: hotelCheckInPolicyQueryKeys.lists(),
        }),
        queryClient.removeQueries({
          queryKey: hotelCheckInPolicyQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
