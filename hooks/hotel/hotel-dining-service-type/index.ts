"use client";
import { HotelDiningServiceTypeService } from "@/services/hotel/hotel-dining-service-type/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["hotel-dining-service-type"] as const;

export function useHotelDiningServiceTypes() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => HotelDiningServiceTypeService.getMany(),
  });
}

export function useHotelDiningServiceType(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => HotelDiningServiceTypeService.getOne(id),
    enabled: !!id,
  });
}

export function useCreateHotelDiningServiceType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: HotelDiningServiceTypeService.create,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

export function useUpdateHotelDiningServiceType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof HotelDiningServiceTypeService.update>[1];
    }) => HotelDiningServiceTypeService.update(id, data),

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

export function useDeleteHotelDiningServiceType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: HotelDiningServiceTypeService.delete,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}
