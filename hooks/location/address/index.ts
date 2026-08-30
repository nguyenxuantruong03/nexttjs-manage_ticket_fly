"use client";

import { AddressService } from "@/services/location/address/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const addressQueryKeys = {
  all: ["address"] as const,
  list: () => [...addressQueryKeys.all, "list"] as const,
  detail: (id: string) => [...addressQueryKeys.all, "detail", id] as const,
};

export function useAddresses(enabled = true) {
  return useQuery({
    queryKey: addressQueryKeys.list(),
    queryFn: () => AddressService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useAddress(id: string, enabled = true) {
  return useQuery({
    queryKey: addressQueryKeys.detail(id),
    queryFn: () => AddressService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

export function useCreateAddress() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof AddressService.create>[0]) =>
      AddressService.create(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: addressQueryKeys.list(),
      });
    },
  });
}

export function useUpdateAddress() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof AddressService.update>[1];
    }) => AddressService.update(id, data),
    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: addressQueryKeys.list() }),
        queryClient.invalidateQueries({
          queryKey: addressQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

export function useDeleteAddress() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => AddressService.delete(id),
    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: addressQueryKeys.list() }),
        queryClient.removeQueries({ queryKey: addressQueryKeys.detail(id) }),
      ]);
    },
  });
}
