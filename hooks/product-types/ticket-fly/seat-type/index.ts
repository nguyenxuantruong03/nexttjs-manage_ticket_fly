"use client";

import { FlySeatTypeService } from "@/services/product-types/ticket-fly/seat-type/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ======================================================
// Query Keys
// ======================================================

export const flySeatTypeQueryKeys = {
  all: ["fly-seat-type"] as const,
  list: () => [...flySeatTypeQueryKeys.all, "list"] as const,
  detail: (id: string) => [...flySeatTypeQueryKeys.all, "detail", id] as const,
};

// ======================================================
// Queries
// ======================================================

export function useFlySeatTypes(enabled = true) {
  return useQuery({
    queryKey: flySeatTypeQueryKeys.list(),
    queryFn: () => FlySeatTypeService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useFlySeatType(id: string, enabled = true) {
  return useQuery({
    queryKey: flySeatTypeQueryKeys.detail(id),
    queryFn: () => FlySeatTypeService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

// ======================================================
// Create
// ======================================================

export function useCreateFlySeatType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof FlySeatTypeService.create>[0]) =>
      FlySeatTypeService.create(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: flySeatTypeQueryKeys.list(),
      });
    },
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateFlySeatType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof FlySeatTypeService.update>[1];
    }) => FlySeatTypeService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: flySeatTypeQueryKeys.list(),
        }),
        queryClient.invalidateQueries({
          queryKey: flySeatTypeQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteFlySeatType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => FlySeatTypeService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: flySeatTypeQueryKeys.list(),
        }),
        queryClient.removeQueries({
          queryKey: flySeatTypeQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
