"use client";

import { YachtCrewRoleService } from "@/services/product-types/yacht/crew-role/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["yacht-crew-role"] as const;

export function useYachtCrewRoles() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => YachtCrewRoleService.getMany(),
  });
}

export function useYachtCrewRole(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => YachtCrewRoleService.getOne(id),
    enabled: !!id,
  });
}

export function useCreateYachtCrewRole() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: YachtCrewRoleService.create,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

export function useUpdateYachtCrewRole() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof YachtCrewRoleService.update>[1];
    }) => YachtCrewRoleService.update(id, data),

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

export function useDeleteYachtCrewRole() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: YachtCrewRoleService.delete,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}