"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import BasicStep from "./step/basic.step";

import StatusStep from "./step/status.step";

import {
  useCreateFlyCabinClass,
  useUpdateFlyCabinClass,
} from "@/hooks/product-types/ticket-fly/cabin-class";

import { FlyCabinClass } from "@/types/product-types/ticket-fly/fly-cabin-class";

import { FlyCabinClassFormSchema } from "./form/schema";

import { flyCabinClassFormConfig } from "./config";

interface FlyCabinClassFormProps {
  initialData?: FlyCabinClass;

  redirect?: boolean;
}

export default function FlyCabinClassForm({
  initialData,
  redirect = true,
}: FlyCabinClassFormProps) {
  const createFlyCabinClass = useCreateFlyCabinClass();

  const updateFlyCabinClass = useUpdateFlyCabinClass();

  return (
    <EntityFormWizard<FlyCabinClassFormSchema, FlyCabinClass>
      initialData={initialData}
      redirect={redirect}
      config={flyCabinClassFormConfig}
      createMutation={createFlyCabinClass}
      updateMutation={updateFlyCabinClass}
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
