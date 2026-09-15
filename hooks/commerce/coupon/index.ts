"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { CouponService } from "@/services/commerce/coupon/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// QUERY KEYS
// ======================================================

export const couponQueryKeys = {
  all: ["coupon"] as const,

  lists: () => [...couponQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...couponQueryKeys.lists(), { page, limit }] as const,

  details: () => [...couponQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...couponQueryKeys.details(), id] as const,
};

// ======================================================
// FIND ALL
// ======================================================

export function useCoupons(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: couponQueryKeys.list(page, limit),

    queryFn: () =>
      CouponService.getMany({
        page,
        limit,
      }),

    enabled,

    staleTime: DEFAULT_QUERY_STALE_TIME,

    placeholderData: keepPreviousData,
  });
}

// ======================================================
// FIND ONE
// ======================================================

export function useCoupon(id: string, enabled = true) {
  return useQuery({
    queryKey: couponQueryKeys.detail(id),

    queryFn: () => CouponService.getOne(id),

    enabled: enabled && Boolean(id),

    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// CREATE
// ======================================================

export function useCreateCoupon() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof CouponService.create>[0]) =>
      CouponService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: couponQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// UPDATE
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
        queryClient.invalidateQueries({
          queryKey: couponQueryKeys.lists(),
        }),

        queryClient.invalidateQueries({
          queryKey: couponQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// DELETE
// ======================================================

export function useDeleteCoupon() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => CouponService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: couponQueryKeys.lists(),
        }),

        queryClient.removeQueries({
          queryKey: couponQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
