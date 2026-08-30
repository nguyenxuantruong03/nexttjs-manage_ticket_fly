"use client";

import { FacilityCategoryService } from "@/services/features/facility-category/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const facilityCategoryQueryKeys = {
  all: ["facility-category"] as const,
  list: () => [...facilityCategoryQueryKeys.all, "list"] as const,
  detail: (id: string) =>
    [...facilityCategoryQueryKeys.all, "detail", id] as const,
};

export function useFacilityCategories(enabled = true) {
  return useQuery({
    queryKey: facilityCategoryQueryKeys.list(),
    queryFn: () => FacilityCategoryService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useFacilityCategory(id: string, enabled = true) {
  return useQuery({
    queryKey: facilityCategoryQueryKeys.detail(id),
    queryFn: () => FacilityCategoryService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

export function useCreateFacilityCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof FacilityCategoryService.create>[0]) =>
      FacilityCategoryService.create(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: facilityCategoryQueryKeys.list(),
      });
    },
  });
}

export function useUpdateFacilityCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof FacilityCategoryService.update>[1];
    }) => FacilityCategoryService.update(id, data),
    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: facilityCategoryQueryKeys.list(),
        }),
        queryClient.invalidateQueries({
          queryKey: facilityCategoryQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

export function useDeleteFacilityCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => FacilityCategoryService.delete(id),
    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: facilityCategoryQueryKeys.list(),
        }),
        queryClient.removeQueries({
          queryKey: facilityCategoryQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
