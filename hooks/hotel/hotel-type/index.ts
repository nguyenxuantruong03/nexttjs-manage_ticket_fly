"use client";
import { HotelTypeService } from "@/services/hotel/hotel-type/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["hotel-type"] as const;

export function useHotelTypes() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => HotelTypeService.getMany(),
  });
}

export function useHotelType(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => HotelTypeService.getOne(id),
    enabled: !!id,
  });
}

export function useCreateHotelType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: HotelTypeService.create,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

export function useUpdateHotelType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof HotelTypeService.update>[1];
    }) => HotelTypeService.update(id, data),

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

export function useDeleteHotelType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: HotelTypeService.delete,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}
