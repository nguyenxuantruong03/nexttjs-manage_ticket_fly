"use client";

import { FlyCrewService } from "@/services/product-types/references/airline/crew/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = ["fly-crew"] as const;

// ======================================================
// FIND ALL
// ======================================================

export function useFlyCrews() {
  return useQuery({
    queryKey: QUERY_KEY,

    queryFn: () => FlyCrewService.getMany(),
  });
}

// ======================================================
// FIND ONE
// ======================================================

export function useFlyCrew(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEY, id],

    queryFn: () => FlyCrewService.getOne(id),

    enabled: !!id,
  });
}

// ======================================================
// CREATE
// ======================================================

export function useCreateFlyCrew() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: FlyCrewService.create,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}

// ======================================================
// UPDATE
// ======================================================

export function useUpdateFlyCrew() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof FlyCrewService.update>[1];
    }) => FlyCrewService.update(id, data),

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

// ======================================================
// DELETE
// ======================================================

export function useDeleteFlyCrew() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: FlyCrewService.delete,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
}
