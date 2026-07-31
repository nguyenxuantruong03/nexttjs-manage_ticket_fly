"use client";
import { HotelBathroomTypeService } from "@/services/hotel/hotel-bathroom-type/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["hotel-bathroom-type"] as const;

export function useHotelBathroomTypes() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => HotelBathroomTypeService.getMany(),
  });
}

export function useHotelBathroomType(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => HotelBathroomTypeService.getOne(id),
    enabled: !!id,
  });
}

export function useCreateHotelBathroomType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: HotelBathroomTypeService.create,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

export function useUpdateHotelBathroomType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof HotelBathroomTypeService.update>[1];
    }) => HotelBathroomTypeService.update(id, data),

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

export function useDeleteHotelBathroomType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: HotelBathroomTypeService.delete,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}
