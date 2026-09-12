import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { SystemSettingFormSchema, schema } from "./form/schema";

import { systemSettingDefaultValues } from "./form/default-values";

import { initSystemSettingFormValues } from "./form/init-value";

import { systemSettingSteps } from "./steps/steps";

import { SystemSetting } from "@/types/system/system-governance.type";
import { SystemSettingService } from "@/services/system/system-setting/client";

export type SystemSettingUpdateInput = Parameters<
  typeof SystemSettingService.update
>[1];

export const systemSettingFormConfig: EntityFormWizardConfig<
  SystemSettingFormSchema,
  SystemSetting,
  never,
  SystemSettingUpdateInput
> = {
  schema,

  defaultValues: systemSettingDefaultValues,

  initValues: initSystemSettingFormValues,

  steps: systemSettingSteps,

  messages: {
    create: "System setting created",
    update: "System setting updated",
  },

  redirectDefault: "/system/system-setting",
};
