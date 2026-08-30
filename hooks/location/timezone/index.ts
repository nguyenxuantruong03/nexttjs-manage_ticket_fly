"use client";

import { TimezoneService } from "@/services/location/timezone/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const timezoneQueryKeys = {
  all: ["timezone"] as const,
  list: () => [...timezoneQueryKeys.all, "list"] as const,
  detail: (id: string) => [...timezoneQueryKeys.all, "detail", id] as const,
};

export function useTimezones(enabled = true) {
  return useQuery({
    queryKey: timezoneQueryKeys.list(),
    queryFn: () => TimezoneService.getMany(),
    enabled,
    staleTime: 1000 * 60 * 5,
  });
}

export function useTimezone(id: string, enabled = true) {
  return useQuery({
    queryKey: timezoneQueryKeys.detail(id),
    queryFn: () => TimezoneService.getOne(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5,
  });
}

export function useCreateTimezone() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof TimezoneService.create>[0]) =>
      TimezoneService.create(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: timezoneQueryKeys.list(),
      });
    },
  });
}

export function useUpdateTimezone() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof TimezoneService.update>[1];
    }) => TimezoneService.update(id, data),
    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: timezoneQueryKeys.list() }),
        queryClient.invalidateQueries({
          queryKey: timezoneQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

export function useDeleteTimezone() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => TimezoneService.delete(id),
    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: timezoneQueryKeys.list() }),
        queryClient.removeQueries({ queryKey: timezoneQueryKeys.detail(id) }),
      ]);
    },
  });
}
