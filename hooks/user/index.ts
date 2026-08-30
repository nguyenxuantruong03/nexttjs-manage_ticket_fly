"use client";

import { UserService } from "@/services/users/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ======================================================
// Query Keys
// ======================================================

export const userQueryKeys = {
  all: ["user"] as const,
  list: () => [...userQueryKeys.all, "list"] as const,
  detail: (id: string) => [...userQueryKeys.all, "detail", id] as const,
  me: () => [...userQueryKeys.all, "me"] as const,
};

// ======================================================
// Queries
// ======================================================

export function useUsers(enabled = true) {
  return useQuery({
    queryKey: userQueryKeys.list(),
    queryFn: () => UserService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useUser(id: string, enabled = true) {
  return useQuery({
    queryKey: userQueryKeys.detail(id),
    queryFn: () => UserService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof UserService.create>[0]) =>
      UserService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: userQueryKeys.list(),
      });
    },
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
          queryKey: userQueryKeys.list(),
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
          queryKey: userQueryKeys.list(),
        }),
        queryClient.removeQueries({
          queryKey: userQueryKeys.detail(id),
        }),
      ]);
    },
  });
}

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
