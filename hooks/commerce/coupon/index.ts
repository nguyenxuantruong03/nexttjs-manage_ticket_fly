"use client";

import { CouponService } from "@/services/commerce/coupon/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ======================================================
// Query Keys
// ======================================================

export const couponQueryKeys = {
  all: ["coupon"] as const,
  list: () => [...couponQueryKeys.all, "list"] as const,
  detail: (id: string) => [...couponQueryKeys.all, "detail", id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useCoupons(enabled = true) {
  return useQuery({
    queryKey: couponQueryKeys.list(),
    queryFn: () => CouponService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useCoupon(id: string, enabled = true) {
  return useQuery({
    queryKey: couponQueryKeys.detail(id),
    queryFn: () => CouponService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateCoupon() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof CouponService.create>[0]) =>
      CouponService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: couponQueryKeys.list(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateCoupon() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof CouponService.update>[1];
    }) => CouponService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: couponQueryKeys.list() }),
        queryClient.invalidateQueries({
          queryKey: couponQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteCoupon() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => CouponService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: couponQueryKeys.list() }),
        queryClient.removeQueries({ queryKey: couponQueryKeys.detail(id) }),
      ]);
    },
  });
}
