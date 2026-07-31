"use client";
import { HotelMealPlanService } from "@/services/hotel/hotel-meal-plan/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["hotel-meal-plan"] as const;

export function useHotelMealPlans() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => HotelMealPlanService.getMany(),
  });
}

export function useHotelMealPlan(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => HotelMealPlanService.getOne(id),
    enabled: !!id,
  });
}

export function useCreateHotelMealPlan() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: HotelMealPlanService.create,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

export function useUpdateHotelMealPlan() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof HotelMealPlanService.update>[1];
    }) => HotelMealPlanService.update(id, data),

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

export function useDeleteHotelMealPlan() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: HotelMealPlanService.delete,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}
