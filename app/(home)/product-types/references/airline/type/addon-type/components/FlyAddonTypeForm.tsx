"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import {
  useCreateFlyAddonType,
  useUpdateFlyAddonType,
} from "@/hooks/product-types/references/airline/addon-type";

import { FlyAddonType } from "@/types/product-types/references/airline/fly-addon-type";

import { FlyAddonTypeFormSchema } from "./form/schema";

import { flyAddonTypeFormConfig } from "./config";

import BasicStep from "./step/basic.step";

import StatusStep from "./step/status.step";

interface FlyAddonTypeFormProps {
  initialData?: FlyAddonType;

  redirect?: boolean;
}

export default function FlyAddonTypeForm({
  initialData,
  redirect = true,
}: FlyAddonTypeFormProps) {
  const createFlyAddonType = useCreateFlyAddonType();

  const updateFlyAddonType = useUpdateFlyAddonType();

  return (
    <EntityFormWizard<FlyAddonTypeFormSchema, FlyAddonType>
      initialData={initialData}
      redirect={redirect}
      config={flyAddonTypeFormConfig}
      createMutation={createFlyAddonType}
      updateMutation={updateFlyAddonType}
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