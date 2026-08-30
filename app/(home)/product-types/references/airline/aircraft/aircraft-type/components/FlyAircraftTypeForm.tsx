"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import {
  useCreateFlyAircraftType,
  useUpdateFlyAircraftType,
} from "@/hooks/product-types/references/airline/aircraft/aircraft-type";

import { FlyAircraftTypeFormSchema } from "./form/schema";

import { FlyAircraftType } from "@/types/product-types/references/airline/aircraft/aircraft-type.type";

import { flyAircraftTypeFormConfig } from "./config";

import BasicStep from "./step/basic.step";

import StatusStep from "./step/status.step";

interface FlyAircraftTypeFormProps {
  initialData?: FlyAircraftType;

  redirect?: boolean;
}

export default function FlyAircraftTypeForm({
  initialData,

  redirect = true,
}: FlyAircraftTypeFormProps) {
  const createFlyAircraftType = useCreateFlyAircraftType();

  const updateFlyAircraftType = useUpdateFlyAircraftType();

  return (
    <EntityFormWizard<FlyAircraftTypeFormSchema, FlyAircraftType>
      initialData={initialData}
      redirect={redirect}
      config={flyAircraftTypeFormConfig}
      createMutation={createFlyAircraftType}
      updateMutation={updateFlyAircraftType}
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
