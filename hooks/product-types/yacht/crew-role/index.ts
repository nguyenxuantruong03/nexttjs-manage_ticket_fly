"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { YachtCrewRoleService } from "@/services/product-types/yacht/crew-role/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// Query Keys
// ======================================================

export const yachtCrewRoleQueryKeys = {
  all: ["yacht-crew-role"] as const,

  lists: () => [...yachtCrewRoleQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...yachtCrewRoleQueryKeys.lists(), { page, limit }] as const,

  details: () => [...yachtCrewRoleQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...yachtCrewRoleQueryKeys.details(), id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useYachtCrewRoles(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: yachtCrewRoleQueryKeys.list(page, limit),
    queryFn: () =>
      YachtCrewRoleService.getMany({
        page,
        limit,
      }),
    enabled,
    staleTime: DEFAULT_QUERY_STALE_TIME,
    placeholderData: keepPreviousData,
  });
}

export function useYachtCrewRole(id: string, enabled = true) {
  return useQuery({
    queryKey: yachtCrewRoleQueryKeys.detail(id),
    queryFn: () => YachtCrewRoleService.getOne(id),
    enabled: enabled && Boolean(id),
    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateYachtCrewRole() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof YachtCrewRoleService.create>[0]) =>
      YachtCrewRoleService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: yachtCrewRoleQueryKeys.lists(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

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

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: yachtCrewRoleQueryKeys.lists(),
        }),
        queryClient.invalidateQueries({
          queryKey: yachtCrewRoleQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteYachtCrewRole() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => YachtCrewRoleService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: yachtCrewRoleQueryKeys.lists(),
        }),
        queryClient.removeQueries({
          queryKey: yachtCrewRoleQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
