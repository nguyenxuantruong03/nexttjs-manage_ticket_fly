"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import BasicStep from "./step/basic.step";

import StatusStep from "./step/status.step";

import { BusSeatTypeFormSchema } from "./form/schema";

import { busSeatTypeFormConfig } from "./config";

import { BusSeatType } from "@/types/product-types/bus/bus-seat-type";

import {
  useCreateBusSeatType,
  useUpdateBusSeatType,
} from "@/hooks/product-types/bus/seat-type";

interface BusSeatTypeFormProps {
  initialData?: BusSeatType;

  redirect?: boolean;
}

export default function BusSeatTypeForm({
  initialData,
  redirect = true,
}: BusSeatTypeFormProps) {
  const createBusSeatType = useCreateBusSeatType();

  const updateBusSeatType = useUpdateBusSeatType();

  return (
    <EntityFormWizard<BusSeatTypeFormSchema, BusSeatType>
      initialData={initialData}
      redirect={redirect}
      config={busSeatTypeFormConfig}
      createMutation={createBusSeatType}
      updateMutation={updateBusSeatType}
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
