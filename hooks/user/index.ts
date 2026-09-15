"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";
import { UserService } from "@/services/users/client";

// ======================================================
// Query Keys
// ======================================================

export const userQueryKeys = {
  all: ["user"] as const,

  lists: () => [...userQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...userQueryKeys.lists(), { page, limit }] as const,

  details: () => [...userQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...userQueryKeys.details(), id] as const,

  me: () => [...userQueryKeys.all, "me"] as const,
};

// ======================================================
// Queries
// ======================================================

export function useUsers(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: userQueryKeys.list(page, limit),
    queryFn: () =>
      UserService.getMany({
        page,
        limit,
      }),
    enabled,
    staleTime: DEFAULT_QUERY_STALE_TIME,
    placeholderData: keepPreviousData,
  });
}

export function useUser(id: string, enabled = true) {
  return useQuery({
    queryKey: userQueryKeys.detail(id),
    queryFn: () => UserService.getOne(id),
    enabled: enabled && Boolean(id),
    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

export function useUserMe(enabled = true) {
  return useQuery({
    queryKey: userQueryKeys.me(),
    queryFn: () => UserService.getMe(),
    enabled,
    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof UserService.update>[1];
    }) => UserService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: userQueryKeys.lists(),
        }),

        queryClient.invalidateQueries({
          queryKey: userQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => UserService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: userQueryKeys.lists(),
        }),

        queryClient.removeQueries({
          queryKey: userQueryKeys.detail(id),
        }),
      ]);
    },
  });
}

// ======================================================
// Update Me
// ======================================================

export function useUpdateUserMe() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof UserService.updateMe>[0]) =>
      UserService.updateMe(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: userQueryKeys.me(),
      });
    },
  });
}
