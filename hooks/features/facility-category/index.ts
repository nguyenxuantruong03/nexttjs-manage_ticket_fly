"use client";

import { FacilityCategoryService } from "@/services/features/facility-category/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["facility-category"] as const;

export function useFacilityCategories() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => FacilityCategoryService.getMany(),
  });
}

export function useFacilityCategory(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => FacilityCategoryService.getOne(id),
    enabled: !!id,
  });
}

export function useCreateFacilityCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: FacilityCategoryService.create,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
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

export function useDeleteFacilityCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: FacilityCategoryService.delete,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}
