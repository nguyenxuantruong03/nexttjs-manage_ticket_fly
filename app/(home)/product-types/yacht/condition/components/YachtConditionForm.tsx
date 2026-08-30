"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import BasicStep from "./step/basic.step";

import StatusStep from "./step/status.step";

import { YachtConditionFormSchema } from "./form/schema";

import { yachtConditionFormConfig } from "./config";

import {
  useCreateYachtCondition,
  useUpdateYachtCondition,
} from "@/hooks/product-types/yacht/condition";

import { YachtCondition } from "@/types/product-types/yacht/yacht-condition";

interface YachtConditionFormProps {
  initialData?: YachtCondition;

  redirect?: boolean;
}

export default function YachtConditionForm({
  initialData,
  redirect = true,
}: YachtConditionFormProps) {
  const createYachtCondition = useCreateYachtCondition();

  const updateYachtCondition = useUpdateYachtCondition();

  return (
    <EntityFormWizard<YachtConditionFormSchema, YachtCondition>
      initialData={initialData}
      redirect={redirect}
      config={yachtConditionFormConfig}
      createMutation={createYachtCondition}
      updateMutation={updateYachtCondition}
    >
      <FormWizardStep index={0}>
        <BasicStep />
      </FormWizardStep>

      <FormWizardStep index={1}>
        <StatusStep />
      </FormWizardStep>
    </EntityFormWizard>
  );
}
