"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import BasicStep from "./step/basic.step";

import StatusStep from "./step/status.step";

import {
  useCreateFlyFareRuleType,
  useUpdateFlyFareRuleType,
} from "@/hooks/product-types/ticket-fly/fare-rule-type";

import { FlyFareRuleType } from "@/types/product-types/ticket-fly/pricing/fare-rule-type";

import { FlyFareRuleTypeFormSchema } from "./form/schema";

import { flyFareRuleTypeFormConfig } from "./config";

interface FlyFareRuleTypeFormProps {
  initialData?: FlyFareRuleType;

  redirect?: boolean;
}

export default function FlyFareRuleTypeForm({
  initialData,
  redirect = true,
}: FlyFareRuleTypeFormProps) {
  const createFlyFareRuleType = useCreateFlyFareRuleType();

  const updateFlyFareRuleType = useUpdateFlyFareRuleType();

  return (
    <EntityFormWizard<FlyFareRuleTypeFormSchema, FlyFareRuleType>
      initialData={initialData}
      redirect={redirect}
      config={flyFareRuleTypeFormConfig}
      createMutation={createFlyFareRuleType}
      updateMutation={updateFlyFareRuleType}
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