"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import BasicStep from "./step/basic.step";

import StatusStep from "./step/status.step";

import {
  FlyCrewDutyFormSchema,
} from "./form/schema";

import {
  useCreateFlyCrewDuty,
  useUpdateFlyCrewDuty,
} from "@/hooks/product-types/references/airline/crew/crew-duty";

import { FlyCrewDuty } from "@/types/product-types/references/airline/crew/crew-duty/fly-crew-duty";

import { flyCrewDutyFormConfig } from "./config";

interface FlyCrewDutyFormProps {
  initialData?: FlyCrewDuty;

  redirect?: boolean;
}

export default function FlyCrewDutyForm({
  initialData,

  redirect = true,
}: FlyCrewDutyFormProps) {
  const createFlyCrewDuty = useCreateFlyCrewDuty();

  const updateFlyCrewDuty = useUpdateFlyCrewDuty();

  return (
    <EntityFormWizard<FlyCrewDutyFormSchema, FlyCrewDuty>
      initialData={initialData}
      redirect={redirect}
      config={flyCrewDutyFormConfig}
      createMutation={createFlyCrewDuty}
      updateMutation={updateFlyCrewDuty}
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