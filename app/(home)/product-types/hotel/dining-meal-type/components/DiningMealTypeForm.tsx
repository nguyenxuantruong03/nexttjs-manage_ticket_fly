"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import {
  useCreateHotelDiningMealType,
  useUpdateHotelDiningMealType,
} from "@/hooks/product-types/hotel/hotel-dining-meal-type";

import { DiningMealType } from "@/types/product-types/hotel/service/dinner-option.type";

import { DiningMealTypeFormSchema } from "./form/schema";

import { diningMealTypeFormConfig } from "./config";

import BasicStep from "./step/basic.step";

import SettingsStep from "./step/setting.step";

interface DiningMealTypeFormProps {
  initialData?: DiningMealType;

  redirect?: boolean;
}

export default function DiningMealTypeForm({
  initialData,
  redirect = true,
}: DiningMealTypeFormProps) {
  const createDiningMealType = useCreateHotelDiningMealType();

  const updateDiningMealType = useUpdateHotelDiningMealType();

  return (
    <EntityFormWizard<DiningMealTypeFormSchema, DiningMealType>
      initialData={initialData}
      redirect={redirect}
      config={diningMealTypeFormConfig}
      createMutation={createDiningMealType}
      updateMutation={updateDiningMealType}
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
