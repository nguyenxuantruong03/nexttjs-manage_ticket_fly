"use client";

import { SystemSettingService } from "@/services/system/system-setting/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ======================================================
// Query Keys
// ======================================================

export const systemSettingQueryKeys = {
  all: ["system-setting"] as const,

  list: () => [...systemSettingQueryKeys.all, "list"] as const,

  detail: (id: string) =>
    [...systemSettingQueryKeys.all, "detail", id] as const,

  key: (key: string) => [...systemSettingQueryKeys.all, "key", key] as const,
};

// ======================================================
// Queries
// ======================================================

export function useSystemSettings(enabled = true) {
  return useQuery({
    queryKey: systemSettingQueryKeys.list(),

    queryFn: () => SystemSettingService.getMany(),

    enabled,

    staleTime: 1000 * 60 * 5,
  });
}

export function useSystemSetting(id: string, enabled = true) {
  return useQuery({
    queryKey: systemSettingQueryKeys.detail(id),

    queryFn: () => SystemSettingService.getOne(id),

    enabled: enabled && !!id,

    staleTime: 1000 * 60 * 5,
  });
}

// ======================================================
// Find By Key
// ======================================================

export function useSystemSettingByKey(key: string, enabled = true) {
  return useQuery({
    queryKey: systemSettingQueryKeys.key(key),

    queryFn: () => SystemSettingService.getByKey(key),

    enabled: enabled && !!key,

    staleTime: 1000 * 60 * 5,
  });
}

// ======================================================
// Update
// ======================================================

export function useUpdateSystemSetting() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof SystemSettingService.update>[1];
    }) => SystemSettingService.update(id, data),

    onSuccess: async (_, variables) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: systemSettingQueryKeys.list(),
        }),

        queryClient.invalidateQueries({
          queryKey: systemSettingQueryKeys.detail(variables.id),
        }),
      ]);
    },
  });
}

// ======================================================
// Delete
// ======================================================

export function useDeleteSystemSetting() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => SystemSettingService.delete(id),

    onSuccess: async (_, id) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: systemSettingQueryKeys.list(),
        }),

        queryClient.removeQueries({
          queryKey: systemSettingQueryKeys.detail(id),
        }),
      ]);
    },
  });
}
