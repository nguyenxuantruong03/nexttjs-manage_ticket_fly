"use client";

import { WardService } from "@/services/location/ward/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const wardQueryKeys = {
  all: ["ward"] as const,
  list: () => [...wardQueryKeys.all, "list"] as const,
  detail: (id: string) => [...wardQueryKeys.all, "detail", id] as const,
};

export function useWards(enabled = true) {
  return useQuery({
    queryKey: wardQueryKeys.list(),
    queryFn: () => WardService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useWard(id: string, enabled = true) {
  return useQuery({
    queryKey: wardQueryKeys.detail(id),
    queryFn: () => WardService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

export function useCreateWard() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof WardService.create>[0]) =>
      WardService.create(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: wardQueryKeys.list() });
    },
  });
}

export function useUpdateWard() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof WardService.update>[1];
    }) => WardService.update(id, data),
    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: wardQueryKeys.list() }),
        queryClient.invalidateQueries({
          queryKey: wardQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

export function useDeleteWard() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => WardService.delete(id),
    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: wardQueryKeys.list() }),
        queryClient.removeQueries({ queryKey: wardQueryKeys.detail(id) }),
      ]);
    },
  });
}
