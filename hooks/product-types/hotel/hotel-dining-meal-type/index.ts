"use client";
import { HotelDiningMealTypeService } from "@/services/product-types/hotel/hotel-dining-meal-type/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["hotel-dining-meal-type"] as const;

export function useHotelDiningMealTypes() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => HotelDiningMealTypeService.getMany(),
  });
}

export function useHotelDiningMealType(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => HotelDiningMealTypeService.getOne(id),
    enabled: !!id,
  });
}

export function useCreateHotelDiningMealType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: HotelDiningMealTypeService.create,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

export function useUpdateHotelDiningMealType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof HotelDiningMealTypeService.update>[1];
    }) => HotelDiningMealTypeService.update(id, data),

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

export function useDeleteHotelDiningMealType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: HotelDiningMealTypeService.delete,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}
