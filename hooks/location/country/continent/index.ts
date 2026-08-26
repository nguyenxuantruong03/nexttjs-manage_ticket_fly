"use client";


import { ContinentService } from "@/services/location/country/continent/client";
import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

const QUERY_KEY = ["continent"] as const;

export function useContinents() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => ContinentService.getMany(),
  });
}

export function useContinent(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],
    queryFn: () => ContinentService.getOne(id),
    enabled: !!id,
  });
}

export function useCreateContinent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ContinentService.create,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

export function useUpdateContinent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof ContinentService.update>[1];
    }) => ContinentService.update(id, data),

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

export function useDeleteContinent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ContinentService.delete,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}