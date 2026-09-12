"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import {
  useCreateRegulationCategory,
  useUpdateRegulationCategory,
} from "@/hooks/commerce/compliance-legal/regulation-category";

import { RegulationCategoryFormSchema } from "./form/schema";

import BasicStep from "./step/basic.step";

import StatusStep from "./step/status.step";

import { regulationCategoryFormConfig } from "./config";
import { RegulationCategory } from "@/types/common/commerce/compliance-legal.type";

// ======================================================
// PROPS
// ======================================================

interface RegulationCategoryFormProps {
  initialData?: RegulationCategory;

  redirect?: boolean;
}

// ======================================================
// COMPONENT
// ======================================================

export default function RegulationCategoryForm({
  initialData,
  redirect = true,
}: RegulationCategoryFormProps) {
  // ======================================================
  // MUTATIONS
  // ======================================================

  const createRegulationCategory = useCreateRegulationCategory();

  const updateRegulationCategory = useUpdateRegulationCategory();

  // ======================================================
  // RENDER
  // ======================================================

  return (
    <EntityFormWizard<RegulationCategoryFormSchema, RegulationCategory>
      initialData={initialData}
      redirect={redirect}
      config={regulationCategoryFormConfig}
      createMutation={createRegulationCategory}
      updateMutation={updateRegulationCategory}
    >
      {/* ======================================================
          STEP 0 - BASIC
      ====================================================== */}

      <FormWizardStep index={0}>
        <BasicStep />
      </FormWizardStep>

      {/* ======================================================
          STEP 1 - STATUS
      ====================================================== */}

      <FormWizardStep index={1}>
        <StatusStep />
      </FormWizardStep>
    </EntityFormWizard>
  );
}
