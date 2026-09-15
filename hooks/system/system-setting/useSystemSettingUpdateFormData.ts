"use client";

import { useQuery } from "@tanstack/react-query";

import { DEFAULT_QUERY_STALE_TIME } from "@/config/react-query.config";

import { SystemSettingService } from "@/services/system/system-setting/client";

export const useSystemSettingUpdateFormData = (
  settingId: string,
  enabled = true,
) => {
  const query = useQuery({
    queryKey: ["system-setting-update-form-data", settingId],
    enabled: enabled && Boolean(settingId),
    staleTime: DEFAULT_QUERY_STALE_TIME,

    queryFn: async () => {
      const [initialData] = await Promise.all([
        SystemSettingService.getOne(settingId),
      ]);

      return {
        initialData,
      };
    },
  });

  return {
    data: query.data,
    isLoading: query.isLoading,
    isFetching: query.isFetching,
    isError: query.isError,

    errors: {
      systemSetting: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};
