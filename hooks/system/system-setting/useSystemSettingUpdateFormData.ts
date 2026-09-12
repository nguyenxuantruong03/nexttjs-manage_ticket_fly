"use client";

import { SystemSettingService } from "@/services/system/system-setting/client";
import { useQuery } from "@tanstack/react-query";

export const useSystemSettingUpdateFormData = (
  settingId: string,
  enabled = true,
) => {
  const query = useQuery({
    queryKey: ["system-setting-update-form-data", settingId],

    enabled: enabled && !!settingId,

    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const initialData = await SystemSettingService.getOne(settingId);

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
