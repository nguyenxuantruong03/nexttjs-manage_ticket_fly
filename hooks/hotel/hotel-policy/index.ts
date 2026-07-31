"use client";
import { HotelPolicyService } from "@/services/hotel/hotel-policy/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["hotel-policy"] as const;

export function useHotelPolicies() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => HotelPolicyService.getMany(),
  });
}

export function useHotelPolicy(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => HotelPolicyService.getOne(id),
    enabled: !!id,
  });
}

export function useCreateHotelPolicy() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: HotelPolicyService.create,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

export function useUpdateHotelPolicy() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof HotelPolicyService.update>[1];
    }) => HotelPolicyService.update(id, data),

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

export function useDeleteHotelPolicy() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: HotelPolicyService.delete,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}
