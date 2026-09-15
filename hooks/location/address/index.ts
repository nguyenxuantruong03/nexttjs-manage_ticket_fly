"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { AddressService } from "@/services/location/address/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// QUERY KEYS
// ======================================================

export const addressQueryKeys = {
  all: ["address"] as const,

  lists: () => [...addressQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...addressQueryKeys.lists(), { page, limit }] as const,

  details: () => [...addressQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...addressQueryKeys.details(), id] as const,
};

// ======================================================
// FIND ALL
// ======================================================

export function useAddresses(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: addressQueryKeys.list(page, limit),

    queryFn: () =>
      AddressService.getMany({
        page,
        limit,
      }),

    enabled,

    staleTime: DEFAULT_QUERY_STALE_TIME,

    placeholderData: keepPreviousData,
  });
}

// ======================================================
// FIND ONE
// ======================================================

export function useAddress(id: string, enabled = true) {
  return useQuery({
    queryKey: addressQueryKeys.detail(id),

    queryFn: () => AddressService.getOne(id),

    enabled: enabled && Boolean(id),

    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// CREATE
// ======================================================

export function useCreateAddress() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof AddressService.create>[0]) =>
      AddressService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: addressQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// UPDATE
// ======================================================

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
        queryClient.invalidateQueries({
          queryKey: addressQueryKeys.lists(),
        }),

        queryClient.invalidateQueries({
          queryKey: addressQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// DELETE
// ======================================================

export function useDeleteAddress() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => AddressService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: addressQueryKeys.lists(),
        }),

        queryClient.removeQueries({
          queryKey: addressQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
