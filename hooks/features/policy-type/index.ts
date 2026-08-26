"use client";

import { PolicyTypeService } from "@/services/features/policy-type/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["policy-type"] as const;

export function usePolicyTypes() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => PolicyTypeService.getMany(),
  });
}

export function usePolicyType(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => PolicyTypeService.getOne(id),
    enabled: !!id,
  });
}

export function useCreatePolicyType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: PolicyTypeService.create,
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
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

export function useDeletePolicyType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: PolicyTypeService.delete,
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}
