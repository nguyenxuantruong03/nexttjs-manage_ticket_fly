"use client";
import { HotelBedTypeService } from "@/services/product-types/hotel/hotel-bed-type/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["hotel-bed-type"] as const;

export function useHotelBedTypes() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => HotelBedTypeService.getMany(),
  });
}

export function useHotelBedType(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => HotelBedTypeService.getOne(id),
    enabled: !!id,
  });
}

export function useCreateHotelBedType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: HotelBedTypeService.create,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

export function useUpdateHotelBedType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof HotelBedTypeService.update>[1];
    }) => HotelBedTypeService.update(id, data),

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

export function useDeleteHotelBedType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: HotelBedTypeService.delete,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}
