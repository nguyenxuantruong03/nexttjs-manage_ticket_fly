"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import {
  useCreateHotelAccessibility,
  useUpdateHotelAccessibility,
} from "@/hooks/product-types/hotel/hotel-accessibility";

import { Accessibility } from "@/types/product-types/hotel/hotel-detail";

import { AccessibilityFormSchema } from "./form/schema";

import { accessibilityFormConfig } from "./config";

import BasicStep from "./step/basic.step";

interface AccessibilityFormProps {
  initialData?: Accessibility;

  redirect?: boolean;
}

export default function AccessibilityForm({
  initialData,

  redirect = true,
}: AccessibilityFormProps) {
  const createAccessibility = useCreateHotelAccessibility();

  const updateAccessibility = useUpdateHotelAccessibility();

  return (
    <EntityFormWizard<AccessibilityFormSchema, Accessibility>
      initialData={initialData}
      redirect={redirect}
      config={accessibilityFormConfig}
      createMutation={createAccessibility}
      updateMutation={updateAccessibility}
    >
      <FormWizardStep index={0}>
        <BasicStep />
      </FormWizardStep>
    </EntityFormWizard>
  );
}