import { createCrudApi } from "@/lib/api/createCrudApi";

import { API } from "@/lib/api/endpoints";

import { clientHttp } from "@/lib/http/client";

import { SystemSetting } from "@/types/system/system-governance.type";

export const SystemSettingService = {
  ...createCrudApi<SystemSetting>(clientHttp, API.SYSTEM_SETTING),

  getByKey: async (key: string): Promise<SystemSetting> => {
    const response = await clientHttp.get<SystemSetting>(
      `${API.SYSTEM_SETTING}/key/${encodeURIComponent(key)}`,
    );

    return response.data;
  },
};
