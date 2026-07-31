"use client";
import { HotelBrandService } from "@/services/hotel/hotel-brand/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["hotel-brand"] as const;

export function useHotelBrands() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => HotelBrandService.getMany(),
  });
}

export function useHotelBrand(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => HotelBrandService.getOne(id),
    enabled: !!id,
  });
}

export function useCreateHotelBrand() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: HotelBrandService.create,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

export function useUpdateHotelBrand() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof HotelBrandService.update>[1];
    }) => HotelBrandService.update(id, data),

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

export function useDeleteHotelBrand() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: HotelBrandService.delete,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}
