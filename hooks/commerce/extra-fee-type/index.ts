"use client";

import { ExtraFeeTypeService } from "@/services/commerce/extra-fee-type/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ======================================================
// Query Keys
// ======================================================

export const extraFeeTypeQueryKeys = {
  all: ["extra-fee-type"] as const,
  list: () => [...extraFeeTypeQueryKeys.all, "list"] as const,
  detail: (id: string) => [...extraFeeTypeQueryKeys.all, "detail", id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useExtraFeeTypes(enabled = true) {
  return useQuery({
    queryKey: extraFeeTypeQueryKeys.list(),
    queryFn: () => ExtraFeeTypeService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useExtraFeeType(id: string, enabled = true) {
  return useQuery({
    queryKey: extraFeeTypeQueryKeys.detail(id),
    queryFn: () => ExtraFeeTypeService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateExtraFeeType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof ExtraFeeTypeService.create>[0]) =>
      ExtraFeeTypeService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: extraFeeTypeQueryKeys.list(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateExtraFeeType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof ExtraFeeTypeService.update>[1];
    }) => ExtraFeeTypeService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: extraFeeTypeQueryKeys.list(),
        }),
        queryClient.invalidateQueries({
          queryKey: extraFeeTypeQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteExtraFeeType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => ExtraFeeTypeService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: extraFeeTypeQueryKeys.list(),
        }),
        queryClient.removeQueries({
          queryKey: extraFeeTypeQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
