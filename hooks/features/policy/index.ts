"use client";

import { PolicyService } from "@/services/features/policy/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const policyQueryKeys = {
  all: ["policy"] as const,
  list: () => [...policyQueryKeys.all, "list"] as const,
  detail: (id: string) => [...policyQueryKeys.all, "detail", id] as const,
};

export function usePolicies(enabled = true) {
  return useQuery({
    queryKey: policyQueryKeys.list(),
    queryFn: () => PolicyService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function usePolicy(id: string, enabled = true) {
  return useQuery({
    queryKey: policyQueryKeys.detail(id),
    queryFn: () => PolicyService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

export function useCreatePolicy() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof PolicyService.create>[0]) =>
      PolicyService.create(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: policyQueryKeys.list() });
    },
  });
}

export function useUpdatePolicy() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof PolicyService.update>[1];
    }) => PolicyService.update(id, data),
    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: policyQueryKeys.list() }),
        queryClient.invalidateQueries({
          queryKey: policyQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

export function useDeletePolicy() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => PolicyService.delete(id),
    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: policyQueryKeys.list() }),
        queryClient.removeQueries({ queryKey: policyQueryKeys.detail(id) }),
      ]);
    },
  });
}
