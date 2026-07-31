"use client";
import { HotelRatePlanTypeService } from "@/services/hotel/hotel-rate-plan-type/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["hotel-rate-plan-type"] as const;

export function useHotelRatePlanTypes() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => HotelRatePlanTypeService.getMany(),
  });
}

export function useHotelRatePlanType(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => HotelRatePlanTypeService.getOne(id),
    enabled: !!id,
  });
}

export function useCreateHotelRatePlanType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: HotelRatePlanTypeService.create,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

export function useUpdateHotelRatePlanType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof HotelRatePlanTypeService.update>[1];
    }) => HotelRatePlanTypeService.update(id, data),

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

export function useDeleteHotelRatePlanType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: HotelRatePlanTypeService.delete,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}
