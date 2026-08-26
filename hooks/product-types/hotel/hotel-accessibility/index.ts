"use client";
import { HotelAccessibilityService } from "@/services/product-types/hotel/hotel-accessibility/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["hotel-accessibility"] as const;

export function useHotelAccessibilities() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => HotelAccessibilityService.getMany(),
  });
}

export function useHotelAccessibility(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => HotelAccessibilityService.getOne(id),
    enabled: !!id,
  });
}

export function useCreateHotelAccessibility() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: HotelAccessibilityService.create,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

export function useUpdateHotelAccessibility() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof HotelAccessibilityService.update>[1];
    }) => HotelAccessibilityService.update(id, data),

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

export function useDeleteHotelAccessibility() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: HotelAccessibilityService.delete,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}
