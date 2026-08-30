"use client";

import { PolicyTypeService } from "@/services/features/policy-type/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const policyTypeQueryKeys = {
  all: ["policy-type"] as const,
  list: () => [...policyTypeQueryKeys.all, "list"] as const,
  detail: (id: string) => [...policyTypeQueryKeys.all, "detail", id] as const,
};

export function usePolicyTypes(enabled = true) {
  return useQuery({
    queryKey: policyTypeQueryKeys.list(),
    queryFn: () => PolicyTypeService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function usePolicyType(id: string, enabled = true) {
  return useQuery({
    queryKey: policyTypeQueryKeys.detail(id),
    queryFn: () => PolicyTypeService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

export function useCreatePolicyType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof PolicyTypeService.create>[0]) =>
      PolicyTypeService.create(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: policyTypeQueryKeys.list(),
      });
    },
  });
}

export function useUpdatePolicyType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof PolicyTypeService.update>[1];
    }) => PolicyTypeService.update(id, data),
    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: policyTypeQueryKeys.list() }),
        queryClient.invalidateQueries({
          queryKey: policyTypeQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

export function useDeletePolicyType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => PolicyTypeService.delete(id),
    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: policyTypeQueryKeys.list() }),
        queryClient.removeQueries({ queryKey: policyTypeQueryKeys.detail(id) }),
      ]);
    },
  });
}
