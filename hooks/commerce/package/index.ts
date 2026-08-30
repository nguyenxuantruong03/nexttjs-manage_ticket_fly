"use client";

import { PackageService } from "@/services/commerce/package/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ======================================================
// Query Keys
// ======================================================

export const packageQueryKeys = {
  all: ["package"] as const,
  list: () => [...packageQueryKeys.all, "list"] as const,
  detail: (id: string) => [...packageQueryKeys.all, "detail", id] as const,
};

// ======================================================
// Queries
// ======================================================

export function usePackages(enabled = true) {
  return useQuery({
    queryKey: packageQueryKeys.list(),
    queryFn: () => PackageService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function usePackage(id: string, enabled = true) {
  return useQuery({
    queryKey: packageQueryKeys.detail(id),
    queryFn: () => PackageService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreatePackage() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof PackageService.create>[0]) =>
      PackageService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: packageQueryKeys.list(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdatePackage() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof PackageService.update>[1];
    }) => PackageService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: packageQueryKeys.list(),
        }),
        queryClient.invalidateQueries({
          queryKey: packageQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeletePackage() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => PackageService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: packageQueryKeys.list(),
        }),
        queryClient.removeQueries({
          queryKey: packageQueryKeys.detail(id),
        }),
      ]);
    },
  });
}