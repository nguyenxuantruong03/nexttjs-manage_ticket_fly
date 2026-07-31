"use client";
import { HotelPolicyTypeService } from "@/services/hotel/hotel-policy-type/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["hotel-policy-type"] as const;

export function useHotelPolicyTypes() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => HotelPolicyTypeService.getMany(),
  });
}

export function useHotelPolicyType(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => HotelPolicyTypeService.getOne(id),
    enabled: !!id,
  });
}

export function useCreateHotelPolicyType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: HotelPolicyTypeService.create,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

export function useUpdateHotelPolicyType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof HotelPolicyTypeService.update>[1];
    }) => HotelPolicyTypeService.update(id, data),

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

export function useDeleteHotelPolicyType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: HotelPolicyTypeService.delete,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}
