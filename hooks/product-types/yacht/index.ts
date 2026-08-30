"use client";
import { YachtService } from "@/services/product-types/yacht/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ======================================================
// Query Keys
// ======================================================

export const yachtQueryKeys = {
  all: ["yacht"] as const,
  list: () => [...yachtQueryKeys.all, "list"] as const,
  detail: (id: string) => [...yachtQueryKeys.all, "detail", id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useYachts(enabled = true) {
  return useQuery({
    queryKey: yachtQueryKeys.list(),
    queryFn: () => YachtService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useYacht(id: string, enabled = true) {
  return useQuery({
    queryKey: yachtQueryKeys.detail(id),
    queryFn: () => YachtService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateYacht() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof YachtService.create>[0]) =>
      YachtService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: yachtQueryKeys.list(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateYacht() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof YachtService.update>[1];
    }) => YachtService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: yachtQueryKeys.list(),
        }),
        queryClient.invalidateQueries({
          queryKey: yachtQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteYacht() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => YachtService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: yachtQueryKeys.list(),
        }),
        queryClient.removeQueries({
          queryKey: yachtQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
