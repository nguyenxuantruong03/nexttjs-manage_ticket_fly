"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import {
  useCreateHotelMealPlan,
  useUpdateHotelMealPlan,
} from "@/hooks/product-types/hotel/hotel-meal-plan";

import SettingsStep from "./step/setting.step";

import BasicStep from "./step/basic.step";

import { MealPlan } from "@/types/product-types/hotel/pricing/rate-plan.types";

import { MealPlanFormSchema } from "./form/schema";

import { mealPlanFormConfig } from "./config";

interface MealPlanFormProps {
  initialData?: MealPlan;

  redirect?: boolean;
}

export default function MealPlanForm({
  initialData,

  redirect = true,
}: MealPlanFormProps) {
  const createMealPlan = useCreateHotelMealPlan();

  const updateMealPlan = useUpdateHotelMealPlan();

  return (
    <EntityFormWizard<MealPlanFormSchema, MealPlan>
      initialData={initialData}
      redirect={redirect}
      config={mealPlanFormConfig}
      createMutation={createMealPlan}
      updateMutation={updateMealPlan}
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
