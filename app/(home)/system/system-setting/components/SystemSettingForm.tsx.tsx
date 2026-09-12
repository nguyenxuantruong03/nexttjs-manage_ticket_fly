"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";
import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import BasicSection from "./steps/basic.step";

import { SystemSettingFormSchema } from "./form/schema";
import { systemSettingFormConfig, SystemSettingUpdateInput } from "./config";

import { useUpdateSystemSetting } from "@/hooks/system/system-setting";
import { SystemSetting } from "@/types/system/system-governance.type";
import { normalizeSettingValue } from "@/lib/normalize-setting-value";

interface SystemSettingFormProps {
  initialData?: SystemSetting;
  redirect?: boolean;
}

export default function SystemSettingForm({
  initialData,
  redirect = true,
}: SystemSettingFormProps) {
  const updateSystemSetting = useUpdateSystemSetting();

  const value = normalizeSettingValue(initialData?.value);

  return (
    <EntityFormWizard<
      SystemSettingFormSchema,
      SystemSetting,
      never,
      SystemSettingUpdateInput
    >
      initialData={initialData}
      redirect={redirect}
      config={systemSettingFormConfig}
      updateMutation={updateSystemSetting}
    >
      <FormWizardStep index={0}>
        <BasicSection value={value} />
      </FormWizardStep>
    </EntityFormWizard>
  );
}
