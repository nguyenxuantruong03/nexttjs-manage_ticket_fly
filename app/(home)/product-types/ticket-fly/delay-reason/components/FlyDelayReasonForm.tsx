"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import BasicStep from "./step/basic.step";

import StatusStep from "./step/status.step";

import {
  useCreateFlyDelayReason,
  useUpdateFlyDelayReason,
} from "@/hooks/product-types/ticket-fly/delay-reason";

import { FlyDelayReason } from "@/types/product-types/ticket-fly/fly-delay-reason";

import { FlyDelayReasonFormSchema } from "./form/schema";

import { flyDelayReasonFormConfig } from "./config";

interface FlyDelayReasonFormProps {
  initialData?: FlyDelayReason;

  redirect?: boolean;
}

export default function FlyDelayReasonForm({
  initialData,
  redirect = true,
}: FlyDelayReasonFormProps) {
  const createFlyDelayReason = useCreateFlyDelayReason();

  const updateFlyDelayReason = useUpdateFlyDelayReason();

  return (
    <EntityFormWizard<FlyDelayReasonFormSchema, FlyDelayReason>
      initialData={initialData}
      redirect={redirect}
      config={flyDelayReasonFormConfig}
      createMutation={createFlyDelayReason}
      updateMutation={updateFlyDelayReason}
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