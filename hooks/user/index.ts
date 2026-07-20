"use client";

import { UserService } from "@/services/users/client";
import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

const QUERY_KEY = ["user"] as const;
const ME_QUERY_KEY = ["user", "me"] as const;

export function useUsers() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: UserService.getMany,
  });
}

export function useUser(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => UserService.getOne(id),
    enabled: !!id,
  });
}

export function useUserMe() {
  return useQuery({
    queryKey: ME_QUERY_KEY,
    queryFn: UserService.getMe,
  });
}

export function useCreateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: UserService.create,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

export function useUpdateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: UserService.updateMe,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });

      queryClient.invalidateQueries({
        queryKey: ME_QUERY_KEY,
      });
    },
  });
}

export function useDeleteUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: UserService.delete,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

export function useUpdateUserMe() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: UserService.updateMe,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ME_QUERY_KEY,
      });
    },
  });
}