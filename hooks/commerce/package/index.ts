"use client";

import { PackageService } from "@/services/commerce/package/client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["package"] as const;

export function usePackages() {
  return useQuery({
    queryKey: QUERY_KEY,

    queryFn: () => PackageService.getMany(),
  });
}

export function usePackage(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],

    queryFn: () => PackageService.getOne(id),

    enabled: !!id,
  });
}

export function useCreatePackage() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: PackageService.create,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

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

export function useDeletePackage() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: PackageService.delete,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}
