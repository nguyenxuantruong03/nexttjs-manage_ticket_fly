"use client";

import { FlyCrewRoleService } from "@/services/product-types/references/airline/crew/crew-role/client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["fly-crew-role"] as const;

export function useFlyCrewRoles() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => FlyCrewRoleService.getMany(),
  });
}

export function useFlyCrewRole(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => FlyCrewRoleService.getOne(id),
    enabled: !!id,
  });
}

export function useCreateFlyCrewRole() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: FlyCrewRoleService.create,
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

export function useUpdateFlyCrewRole() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof FlyCrewRoleService.update>[1];
    }) => FlyCrewRoleService.update(id, data),

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

export function useDeleteFlyCrewRole() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: FlyCrewRoleService.delete,
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}
