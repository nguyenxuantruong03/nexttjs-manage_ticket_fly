"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { FlyCrewDutyService } from "@/services/product-types/references/airline/crew/crew-duty/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// Query Keys
// ======================================================

export const flyCrewDutyQueryKeys = {
  all: ["fly-crew-duty"] as const,

  lists: () => [...flyCrewDutyQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...flyCrewDutyQueryKeys.lists(), { page, limit }] as const,

  details: () => [...flyCrewDutyQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...flyCrewDutyQueryKeys.details(), id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useFlyCrewDuties(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: flyCrewDutyQueryKeys.list(page, limit),
    queryFn: () =>
      FlyCrewDutyService.getMany({
        page,
        limit,
      }),
    enabled,
    staleTime: DEFAULT_QUERY_STALE_TIME,
    placeholderData: keepPreviousData,
  });
}

export function useFlyCrewDuty(id: string, enabled = true) {
  return useQuery({
    queryKey: flyCrewDutyQueryKeys.detail(id),
    queryFn: () => FlyCrewDutyService.getOne(id),
    enabled: enabled && Boolean(id),
    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateFlyCrewDuty() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof FlyCrewDutyService.create>[0]) =>
      FlyCrewDutyService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: flyCrewDutyQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateFlyCrewDuty() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof FlyCrewDutyService.update>[1];
    }) => FlyCrewDutyService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: flyCrewDutyQueryKeys.lists(),
        }),
        queryClient.invalidateQueries({
          queryKey: flyCrewDutyQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteFlyCrewDuty() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => FlyCrewDutyService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: flyCrewDutyQueryKeys.lists(),
        }),
        queryClient.removeQueries({
          queryKey: flyCrewDutyQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
