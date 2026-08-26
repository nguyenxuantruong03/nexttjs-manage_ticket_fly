"use client";

import { BookingTypeService } from "@/services/commerce/booking-type/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["booking-type"] as const;

export function useBookingTypes() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => BookingTypeService.getMany(),
  });
}

export function useBookingType(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => BookingTypeService.getOne(id),
    enabled: !!id,
  });
}

export function useCreateBookingType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: BookingTypeService.create,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

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

export function useDeleteBookingType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: BookingTypeService.delete,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}