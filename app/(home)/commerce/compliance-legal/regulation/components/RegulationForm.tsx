"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import {
  useCreateRegulation,
  useUpdateRegulation,
} from "@/hooks/commerce/compliance-legal/regulation";

import { RegulationFormSchema } from "./form/schema";

import BasicStep from "./step/basic.step";

import CategoryStep from "./step/category.step";

import StatusStep from "./step/status.step";

import { regulationFormConfig } from "./config";
import {
  Regulation,
  RegulationCategory,
} from "@/types/common/commerce/compliance-legal.type";
import EffectivePeriodStep from "./step/effectivePeriod.step";

// ======================================================
// PROPS
// ======================================================

interface RegulationFormProps {
  initialData?: Regulation;

  regulationCategoryData: RegulationCategory[];

  redirect?: boolean;
}

// ======================================================
// COMPONENT
// ======================================================

export default function RegulationForm({
  initialData,

  regulationCategoryData,

  redirect = true,
}: RegulationFormProps) {
  // ======================================================
  // MUTATIONS
  // ======================================================

  const createRegulation = useCreateRegulation();

  const updateRegulation = useUpdateRegulation();

  // ======================================================
  // RENDER
  // ======================================================

  return (
    <EntityFormWizard<RegulationFormSchema, Regulation>
      initialData={initialData}
      redirect={redirect}
      config={regulationFormConfig}
      createMutation={createRegulation}
      updateMutation={updateRegulation}
    >
      {/* ======================================================
          STEP 0 - BASIC
      ====================================================== */}

      <FormWizardStep index={0}>
        <BasicStep />
      </FormWizardStep>

      {/* ======================================================
          STEP 1 - CATEGORY
      ====================================================== */}

      <FormWizardStep index={1}>
        <CategoryStep regulationCategoryData={regulationCategoryData} />
      </FormWizardStep>

      {/* ======================================================
          STEP 2 - EFFECTIVE PERIOD
      ====================================================== */}

      <FormWizardStep index={2}>
        <EffectivePeriodStep />
      </FormWizardStep>

      {/* ======================================================
          STEP 3 - STATUS
      ====================================================== */}

      <FormWizardStep index={3}>
        <StatusStep />
      </FormWizardStep>
    </EntityFormWizard>
  );
}
