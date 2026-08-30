"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import BasicStep from "./step/basic.step";

import StatusStep from "./step/status.step";

import { FlySeatTypeFormSchema } from "./form/schema";

import { flySeatTypeFormConfig } from "./config";

import {
  useCreateFlySeatType,
  useUpdateFlySeatType,
} from "@/hooks/product-types/ticket-fly/seat-type";

import { FlySeatType } from "@/types/product-types/ticket-fly/fly-seat-type";

interface FlySeatTypeFormProps {
  initialData?: FlySeatType;

  redirect?: boolean;
}

export default function FlySeatTypeForm({
  initialData,
  redirect = true,
}: FlySeatTypeFormProps) {
  const createFlySeatType = useCreateFlySeatType();

  const updateFlySeatType = useUpdateFlySeatType();

  return (
    <EntityFormWizard<FlySeatTypeFormSchema, FlySeatType>
      initialData={initialData}
      redirect={redirect}
      config={flySeatTypeFormConfig}
      createMutation={createFlySeatType}
      updateMutation={updateFlySeatType}
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
