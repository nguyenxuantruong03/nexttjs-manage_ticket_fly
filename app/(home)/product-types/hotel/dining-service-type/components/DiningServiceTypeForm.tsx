// DiningServiceTypeForm.tsx

"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import {
  useCreateHotelDiningServiceType,
  useUpdateHotelDiningServiceType,
} from "@/hooks/product-types/hotel/hotel-dining-service-type";

import { DiningServiceType } from "@/types/product-types/hotel/service/dinner-option.type";

import { DiningServiceTypeFormSchema } from "./form/schema";

import { diningServiceTypeFormConfig } from "./config";

import BasicStep from "./step/basic.step";

import SettingsStep from "./step/setting.step";

interface DiningServiceTypeFormProps {
  initialData?: DiningServiceType;
  redirect?: boolean;
}

export default function DiningServiceTypeForm({
  initialData,
  redirect = true,
}: DiningServiceTypeFormProps) {
  const createDiningServiceType = useCreateHotelDiningServiceType();

  const updateDiningServiceType = useUpdateHotelDiningServiceType();

  return (
    <EntityFormWizard<DiningServiceTypeFormSchema, DiningServiceType>
      initialData={initialData}
      redirect={redirect}
      config={diningServiceTypeFormConfig}
      createMutation={createDiningServiceType}
      updateMutation={updateDiningServiceType}
    >
      <FormWizardStep index={0}>
        <BasicStep />
      </FormWizardStep>

      <FormWizardStep index={1}>
        <SettingsStep />
      </FormWizardStep>
    </EntityFormWizard>
  );
}