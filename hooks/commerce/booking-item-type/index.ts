"use client";

import { BookingItemTypeService } from "@/services/commerce/booking-item-type/client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["booking-item-type"] as const;

export function useBookingItemTypes() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => BookingItemTypeService.getMany(),
  });
}

export function useBookingItemType(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => BookingItemTypeService.getOne(id),
    enabled: !!id,
  });
}

export function useCreateBookingItemType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: BookingItemTypeService.create,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

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

    onSuccess(_, variables) {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });

      queryClient.invalidateQueries({
        queryKey: [...QUERY_KEY, variables.id],
      });
    },
  });
}

export function useDeleteBookingItemType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: BookingItemTypeService.delete,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}