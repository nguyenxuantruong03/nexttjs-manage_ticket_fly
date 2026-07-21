"use client"
import { YachtService } from "@/services/yacht/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["yacht"] as const;

export function useYachts() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => YachtService.getMany(),
  });
}

export function useYacht(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => YachtService.getOne(id),
    enabled: !!id,
  });
}

export function useCreateYacht() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: YachtService.create,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

export function useUpdateYacht() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof YachtService.update>[1];
    }) => YachtService.update(id, data),

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

export function useDeleteYacht() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: YachtService.delete,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}
