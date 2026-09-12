import { SystemSettingFormSchema } from "./schema";

import { systemSettingDefaultValues } from "./default-values";

import { SystemSetting } from "@/types/system/system-governance.type";

export function initSystemSettingFormValues(
  systemSetting?: SystemSetting,
): SystemSettingFormSchema {
  if (!systemSetting) {
    return structuredClone(systemSettingDefaultValues);
  }

  return {
    // ======================================================
    // BASIC
    // ======================================================

    key: systemSetting.key ?? "",

    value: systemSetting.value,
  };
}
