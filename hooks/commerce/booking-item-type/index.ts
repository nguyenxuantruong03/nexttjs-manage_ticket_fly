"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { BookingItemTypeService } from "@/services/commerce/booking-item-type/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// QUERY KEYS
// ======================================================

export const bookingItemTypeQueryKeys = {
  all: ["booking-item-type"] as const,

  lists: () => [...bookingItemTypeQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...bookingItemTypeQueryKeys.lists(), { page, limit }] as const,

  details: () => [...bookingItemTypeQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...bookingItemTypeQueryKeys.details(), id] as const,
};

// ======================================================
// FIND ALL
// ======================================================

export function useBookingItemTypes(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: bookingItemTypeQueryKeys.list(page, limit),

    queryFn: () =>
      BookingItemTypeService.getMany({
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

export function useBookingItemType(id: string, enabled = true) {
  return useQuery({
    queryKey: bookingItemTypeQueryKeys.detail(id),

    queryFn: () => BookingItemTypeService.getOne(id),

    enabled: enabled && Boolean(id),

    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// CREATE
// ======================================================

export function useCreateBookingItemType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof BookingItemTypeService.create>[0]) =>
      BookingItemTypeService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: bookingItemTypeQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// UPDATE
// ======================================================

export function useUpdateBookingItemType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof BookingItemTypeService.update>[1];
    }) => BookingItemTypeService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: bookingItemTypeQueryKeys.lists(),
        }),

        queryClient.invalidateQueries({
          queryKey: bookingItemTypeQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// DELETE
// ======================================================

export function useDeleteBookingItemType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => BookingItemTypeService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: bookingItemTypeQueryKeys.lists(),
        }),

        queryClient.removeQueries({
          queryKey: bookingItemTypeQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
