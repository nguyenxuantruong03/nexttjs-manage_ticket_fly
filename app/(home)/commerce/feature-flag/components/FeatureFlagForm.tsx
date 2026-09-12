"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import BasicStep from "./step/basic.step";

import RolloutStep from "./step/rollout.step";

import StatusStep from "./step/status.step";

import { featureFlagFormConfig } from "./config";

import { FeatureFlagFormSchema } from "./form/schema";

import {
  useCreateFeatureFlag,
  useUpdateFeatureFlag,
} from "@/hooks/commerce/feature-flag";
import { FeatureFlag } from "@/types/common/commerce/feature-flag.type";

interface FeatureFlagFormProps {
  initialData?: FeatureFlag;

  redirect?: boolean;
}

export default function FeatureFlagForm({
  initialData,
  redirect = true,
}: FeatureFlagFormProps) {
  const createFeatureFlag = useCreateFeatureFlag();

  const updateFeatureFlag = useUpdateFeatureFlag();

  return (
    <EntityFormWizard<FeatureFlagFormSchema, FeatureFlag>
      initialData={initialData}
      redirect={redirect}
      config={featureFlagFormConfig}
      createMutation={createFeatureFlag}
      updateMutation={updateFeatureFlag}
    >
      <FormWizardStep index={0}>
        <BasicStep />
      </FormWizardStep>

      <FormWizardStep index={1}>
        <RolloutStep />
      </FormWizardStep>

      <FormWizardStep index={2}>
        <StatusStep />
      </FormWizardStep>
    </EntityFormWizard>
  );
}
