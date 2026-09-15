"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { FacilityService } from "@/services/features/facility/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// QUERY KEYS
// ======================================================

export const facilityQueryKeys = {
  all: ["facility"] as const,

  lists: () => [...facilityQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...facilityQueryKeys.lists(), { page, limit }] as const,

  details: () => [...facilityQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...facilityQueryKeys.details(), id] as const,
};

// ======================================================
// FIND ALL
// ======================================================

export function useFacilities(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: facilityQueryKeys.list(page, limit),

    queryFn: () =>
      FacilityService.getMany({
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

export function useFacility(id: string, enabled = true) {
  return useQuery({
    queryKey: facilityQueryKeys.detail(id),

    queryFn: () => FacilityService.getOne(id),

    enabled: enabled && Boolean(id),

    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// CREATE
// ======================================================

export function useCreateFacility() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof FacilityService.create>[0]) =>
      FacilityService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: facilityQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// UPDATE
// ======================================================

export function useUpdateFacility() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof FacilityService.update>[1];
    }) => FacilityService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: facilityQueryKeys.lists(),
        }),

        queryClient.invalidateQueries({
          queryKey: facilityQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// DELETE
// ======================================================

export function useDeleteFacility() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => FacilityService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: facilityQueryKeys.lists(),
        }),

        queryClient.removeQueries({
          queryKey: facilityQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
