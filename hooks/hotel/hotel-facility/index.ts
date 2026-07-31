"use client";
import { HotelFacilityService } from "@/services/hotel/hotel-facility/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["hotel-facility"] as const;

export function useHotelFacilities() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => HotelFacilityService.getMany(),
  });
}

export function useHotelFacility(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => HotelFacilityService.getOne(id),
    enabled: !!id,
  });
}

export function useCreateHotelFacility() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: HotelFacilityService.create,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

export function useUpdateHotelFacility() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof HotelFacilityService.update>[1];
    }) => HotelFacilityService.update(id, data),

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

export function useDeleteHotelFacility() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: HotelFacilityService.delete,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}
