"use client";

import { HotelCheckInPolicyService } from "@/services/product-types/hotel/hotel-check-in-policy/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ======================================================
// Query Keys
// ======================================================

export const hotelCheckInPolicyQueryKeys = {
  all: ["hotel-check-in-policy"] as const,
  list: () => [...hotelCheckInPolicyQueryKeys.all, "list"] as const,
  detail: (id: string) =>
    [...hotelCheckInPolicyQueryKeys.all, "detail", id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useHotelCheckInPolicies(enabled = true) {
  return useQuery({
    queryKey: hotelCheckInPolicyQueryKeys.list(),
    queryFn: () => HotelCheckInPolicyService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useHotelCheckInPolicy(id: string, enabled = true) {
  return useQuery({
    queryKey: hotelCheckInPolicyQueryKeys.detail(id),
    queryFn: () => HotelCheckInPolicyService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
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
        queryKey: hotelCheckInPolicyQueryKeys.list(),
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
          queryKey: hotelCheckInPolicyQueryKeys.list(),
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
          queryKey: hotelCheckInPolicyQueryKeys.list(),
        }),
        queryClient.removeQueries({
          queryKey: hotelCheckInPolicyQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
