"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import {
  useCreateFlyAlliance,
  useUpdateFlyAlliance,
} from "@/hooks/product-types/references/alliance";

import { FlyAlliance } from "@/types/product-types/references/alliance/alliance.types";

import { FlyAllianceFormSchema } from "./schema/alliance.schema";

import {
  flyAllianceFormConfig,
  FlyAllianceCreateInput,
  FlyAllianceUpdateInput,
} from "./config";

import BasicStep from "./step/basic.step";

import AirlinesStep from "./step/airlines.step";

interface FlyAllianceFormProps {
  initialData?: FlyAlliance;

  redirect?: boolean;
}

export default function FlyAllianceForm({
  initialData,
  redirect = true,
}: FlyAllianceFormProps) {
  const createFlyAlliance = useCreateFlyAlliance();

  const updateFlyAlliance = useUpdateFlyAlliance();

  return (
    <EntityFormWizard<
      FlyAllianceFormSchema,
      FlyAlliance,
      FlyAllianceCreateInput,
      FlyAllianceUpdateInput
    >
      initialData={initialData}
      redirect={redirect}
      config={flyAllianceFormConfig}
      createMutation={createFlyAlliance}
      updateMutation={updateFlyAlliance}
    >
      <FormWizardStep index={0}>
        <BasicStep />
      </FormWizardStep>

      <FormWizardStep index={1}>
        <AirlinesStep />
      </FormWizardStep>
    </EntityFormWizard>
  );
}
