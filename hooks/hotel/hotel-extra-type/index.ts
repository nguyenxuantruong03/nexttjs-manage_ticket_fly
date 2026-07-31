"use client";
import { HotelExtraTypeService } from "@/services/hotel/hotel-extra-type/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["hotel-extra-type"] as const;

export function useHotelExtraTypes() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => HotelExtraTypeService.getMany(),
  });
}

export function useHotelExtraType(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => HotelExtraTypeService.getOne(id),
    enabled: !!id,
  });
}

export function useCreateHotelExtraType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: HotelExtraTypeService.create,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

export function useUpdateHotelExtraType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof HotelExtraTypeService.update>[1];
    }) => HotelExtraTypeService.update(id, data),

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

export function useDeleteHotelExtraType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: HotelExtraTypeService.delete,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}
