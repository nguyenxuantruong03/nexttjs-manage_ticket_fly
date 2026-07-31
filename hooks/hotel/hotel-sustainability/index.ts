"use client";
import { HotelSustainabilityService } from "@/services/hotel/hotel-sustainability/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["hotel-sustainability"] as const;

export function useHotelSustainabilities() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => HotelSustainabilityService.getMany(),
  });
}

export function useHotelSustainability(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => HotelSustainabilityService.getOne(id),
    enabled: !!id,
  });
}

export function useCreateHotelSustainability() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: HotelSustainabilityService.create,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

export function useUpdateHotelSustainability() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof HotelSustainabilityService.update>[1];
    }) => HotelSustainabilityService.update(id, data),

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

export function useDeleteHotelSustainability() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: HotelSustainabilityService.delete,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}
