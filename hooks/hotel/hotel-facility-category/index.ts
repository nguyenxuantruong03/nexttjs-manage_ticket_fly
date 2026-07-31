"use client";
import { HotelFacilityCategoryService } from "@/services/hotel/hotel-facility-category/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["hotel-facility-category"] as const;

export function useHotelFacilityCategories() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => HotelFacilityCategoryService.getMany(),
  });
}

export function useHotelFacilityCategory(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => HotelFacilityCategoryService.getOne(id),
    enabled: !!id,
  });
}

export function useCreateHotelFacilityCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: HotelFacilityCategoryService.create,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

export function useUpdateHotelFacilityCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof HotelFacilityCategoryService.update>[1];
    }) => HotelFacilityCategoryService.update(id, data),

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

export function useDeleteHotelFacilityCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: HotelFacilityCategoryService.delete,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}
