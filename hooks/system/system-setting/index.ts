"use client";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { SystemSettingService } from "@/services/system/system-setting/client";

import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  DEFAULT_QUERY_STALE_TIME,
} from "@/config/react-query.config";

// ======================================================
// Query Keys
// ======================================================

export const systemSettingQueryKeys = {
  all: ["system-setting"] as const,

  lists: () => [...systemSettingQueryKeys.all, "list"] as const,

  list: (page: number, limit: number) =>
    [...systemSettingQueryKeys.lists(), { page, limit }] as const,

  details: () => [...systemSettingQueryKeys.all, "detail"] as const,

  detail: (id: string) => [...systemSettingQueryKeys.details(), id] as const,

  key: (key: string) => [...systemSettingQueryKeys.all, "key", key] as const,
};

// ======================================================
// Queries
// ======================================================

export function useSystemSettings(
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
  enabled = true,
) {
  return useQuery({
    queryKey: systemSettingQueryKeys.list(page, limit),
    queryFn: () =>
      SystemSettingService.getMany({
        page,
        limit,
      }),
    enabled,
    staleTime: DEFAULT_QUERY_STALE_TIME,
    placeholderData: keepPreviousData,
  });
}

export function useSystemSetting(id: string, enabled = true) {
  return useQuery({
    queryKey: systemSettingQueryKeys.detail(id),
    queryFn: () => SystemSettingService.getOne(id),
    enabled: enabled && Boolean(id),
    staleTime: DEFAULT_QUERY_STALE_TIME,
  });
}

// ======================================================
// Find By Key
// ======================================================

export function useSystemSettingByKey(key: string, enabled = true) {
  return useQuery({
    queryKey: systemSettingQueryKeys.key(key),
    queryFn: () => SystemSettingService.getByKey(key),
    enabled: enabled && Boolean(key),
    staleTime: DEFAULT_QUERY_STALE_TIME,
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
          queryKey: systemSettingQueryKeys.lists(),
        }),

        queryClient.invalidateQueries({
          queryKey: systemSettingQueryKeys.detail(variables.id),
        }),

        queryClient.invalidateQueries({
          queryKey: systemSettingQueryKeys.all,
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
          queryKey: systemSettingQueryKeys.lists(),
        }),

        queryClient.removeQueries({
          queryKey: systemSettingQueryKeys.detail(id),
        }),

        queryClient.invalidateQueries({
          queryKey: systemSettingQueryKeys.all,
        }),
      ]);
    },
  });
}
