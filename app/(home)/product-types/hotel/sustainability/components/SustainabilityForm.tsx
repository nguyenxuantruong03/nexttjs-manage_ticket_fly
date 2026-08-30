"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import { Sustainability } from "@/types/product-types/hotel/hotel-detail";

import {
  useCreateHotelSustainability,
  useUpdateHotelSustainability,
} from "@/hooks/product-types/hotel/hotel-sustainability";

import { SustainabilityFormSchema } from "./form/schema";

import { sustainabilityFormConfig } from "./config";

import BasicStep from "./step/basic.step";

interface SustainabilityFormProps {
  initialData?: Sustainability;

  redirect?: boolean;
}

export default function SustainabilityForm({
  initialData,

  redirect = true,
}: SustainabilityFormProps) {
  const createSustainability = useCreateHotelSustainability();

  const updateSustainability = useUpdateHotelSustainability();

  return (
    <EntityFormWizard<SustainabilityFormSchema, Sustainability>
      initialData={initialData}
      redirect={redirect}
      config={sustainabilityFormConfig}
      createMutation={createSustainability}
      updateMutation={updateSustainability}
    >
      <FormWizardStep index={0}>
        <BasicStep />
      </FormWizardStep>
    </EntityFormWizard>
  );
}
