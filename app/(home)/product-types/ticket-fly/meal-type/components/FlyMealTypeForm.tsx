"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import BasicStep from "./step/basic.step";

import StatusStep from "./step/status.step";

import {
  useCreateFlyMealType,
  useUpdateFlyMealType,
} from "@/hooks/product-types/ticket-fly/meal-type";

import { FlyMealType } from "@/types/product-types/ticket-fly/fly-meal-type";

import { FlyMealTypeFormSchema } from "./form/schema";

import { flyMealTypeFormConfig } from "./config";

interface FlyMealTypeFormProps {
  initialData?: FlyMealType;

  redirect?: boolean;
}

export default function FlyMealTypeForm({
  initialData,
  redirect = true,
}: FlyMealTypeFormProps) {
  const createFlyMealType = useCreateFlyMealType();

  const updateFlyMealType = useUpdateFlyMealType();

  return (
    <EntityFormWizard<FlyMealTypeFormSchema, FlyMealType>
      initialData={initialData}
      redirect={redirect}
      config={flyMealTypeFormConfig}
      createMutation={createFlyMealType}
      updateMutation={updateFlyMealType}
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
