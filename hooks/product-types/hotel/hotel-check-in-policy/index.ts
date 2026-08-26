"use client";

import { HotelCheckInPolicyService } from "@/services/product-types/hotel/hotel-check-in-policy/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["hotel-check-in-policy"] as const;

export function useHotelCheckInPolicies() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => HotelCheckInPolicyService.getMany(),
  });
}

export function useHotelCheckInPolicy(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => HotelCheckInPolicyService.getOne(id),
    enabled: !!id,
  });
}

export function useCreateHotelCheckInPolicy() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: HotelCheckInPolicyService.create,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

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

export function useDeleteHotelCheckInPolicy() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: HotelCheckInPolicyService.delete,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}
