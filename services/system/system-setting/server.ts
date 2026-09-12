import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";

import { SystemSetting } from "@/types/system/system-governance.type";

export const SystemSettingServerService = {
  ...createServerCrudApi<SystemSetting>(API.SYSTEM_SETTING),

  getByKey: async (key: string): Promise<SystemSetting> => {
    const response = await fetch(
      `${API.SYSTEM_SETTING}/key/${encodeURIComponent(key)}`,
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch system setting: ${key}`);
    }

    return response.json();
  },
};
