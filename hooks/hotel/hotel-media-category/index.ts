"use client";
import { HotelMediaCategoryService } from "@/services/hotel/hotel-media-category/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["hotel-media-category"] as const;

export function useHotelMediaCategories() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => HotelMediaCategoryService.getMany(),
  });
}

export function useHotelMediaCategory(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => HotelMediaCategoryService.getOne(id),
    enabled: !!id,
  });
}

export function useCreateHotelMediaCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: HotelMediaCategoryService.create,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

export function useUpdateHotelMediaCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof HotelMediaCategoryService.update>[1];
    }) => HotelMediaCategoryService.update(id, data),

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

export function useDeleteHotelMediaCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: HotelMediaCategoryService.delete,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}
