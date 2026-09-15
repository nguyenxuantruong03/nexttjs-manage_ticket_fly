"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { DistrictService } from "@/services/location/district/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// QUERY KEYS
// ======================================================

export const districtQueryKeys = {
  all: ["district"] as const,

  lists: () => [...districtQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...districtQueryKeys.lists(), { page, limit }] as const,

  details: () => [...districtQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...districtQueryKeys.details(), id] as const,
};

// ======================================================
// FIND ALL
// ======================================================

export function useDistricts(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: districtQueryKeys.list(page, limit),

    queryFn: () =>
      DistrictService.getMany({
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

export function useDistrict(id: string, enabled = true) {
  return useQuery({
    queryKey: districtQueryKeys.detail(id),

    queryFn: () => DistrictService.getOne(id),

    enabled: enabled && Boolean(id),

    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// CREATE
// ======================================================

export function useCreateDistrict() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof DistrictService.create>[0]) =>
      DistrictService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: districtQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// UPDATE
// ======================================================

export function useUpdateDistrict() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof DistrictService.update>[1];
    }) => DistrictService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: districtQueryKeys.lists(),
        }),

        queryClient.invalidateQueries({
          queryKey: districtQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// DELETE
// ======================================================

export function useDeleteDistrict() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => DistrictService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: districtQueryKeys.lists(),
        }),

        queryClient.removeQueries({
          queryKey: districtQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
