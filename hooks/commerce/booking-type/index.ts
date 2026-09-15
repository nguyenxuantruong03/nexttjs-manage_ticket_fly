"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { BookingTypeService } from "@/services/commerce/booking-type/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// QUERY KEYS
// ======================================================

export const bookingTypeQueryKeys = {
  all: ["booking-type"] as const,

  lists: () => [...bookingTypeQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...bookingTypeQueryKeys.lists(), { page, limit }] as const,

  details: () => [...bookingTypeQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...bookingTypeQueryKeys.details(), id] as const,
};

// ======================================================
// FIND ALL
// ======================================================

export function useBookingTypes(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: bookingTypeQueryKeys.list(page, limit),

    queryFn: () =>
      BookingTypeService.getMany({
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

export function useBookingType(id: string, enabled = true) {
  return useQuery({
    queryKey: bookingTypeQueryKeys.detail(id),

    queryFn: () => BookingTypeService.getOne(id),

    enabled: enabled && Boolean(id),

    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// CREATE
// ======================================================

export function useCreateBookingType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof BookingTypeService.create>[0]) =>
      BookingTypeService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: bookingTypeQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// UPDATE
// ======================================================

export function useUpdateBookingType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof BookingTypeService.update>[1];
    }) => BookingTypeService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: bookingTypeQueryKeys.lists(),
        }),

        queryClient.invalidateQueries({
          queryKey: bookingTypeQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// DELETE
// ======================================================

export function useDeleteBookingType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => BookingTypeService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: bookingTypeQueryKeys.lists(),
        }),

        queryClient.removeQueries({
          queryKey: bookingTypeQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
