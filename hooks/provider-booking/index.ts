"use client"
import { ProviderBookingService } from "@/services/provider-booking/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["provider-booking"] as const;

export function useProviderBookings() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => ProviderBookingService.getMany(),
  });
}

export function useProviderBooking(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => ProviderBookingService.getOne(id),
    enabled: !!id,
  });
}

export function useCreateProviderBooking() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ProviderBookingService.create,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

export function useUpdateProviderBooking() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof ProviderBookingService.update>[1];
    }) => ProviderBookingService.update(id, data),

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

export function useDeleteProviderBooking() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ProviderBookingService.delete,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}
