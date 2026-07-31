"use client";
import { WardService } from "@/services/location/ward/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["ward"] as const;

export function useWards() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => WardService.getMany(),
  });
}

export function useWard(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => WardService.getOne(id),
    enabled: !!id,
  });
}

export function useCreateWard() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: WardService.create,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
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

    onSuccess(_, variables) {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });

      queryClient.invalidateQueries({
        queryKey: [...QUERY_KEY, variables.id],
      });
    },
  });
}

export function useDeleteWard() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: WardService.delete,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}
