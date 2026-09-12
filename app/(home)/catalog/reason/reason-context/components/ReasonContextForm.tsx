"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import { ReasonContextFormSchema } from "./form/schema";

import BasicStep from "./step/basic.step";

import StatusStep from "./step/status.step";
import { reasonContextFormConfig } from "./config";
import { ReasonContext } from "@/types/common/catalog/reason-code.type";
import {
  useCreateReasonContext,
  useUpdateReasonContext,
} from "@/hooks/catalog/reason/reason-context";

// ======================================================
// PROPS
// ======================================================

interface ReasonContextFormProps {
  initialData?: ReasonContext;

  redirect?: boolean;
}

// ======================================================
// COMPONENT
// ======================================================

export default function ReasonContextForm({
  initialData,

  redirect = true,
}: ReasonContextFormProps) {
  // ======================================================
  // MUTATIONS
  // ======================================================

  const createReasonContext = useCreateReasonContext();

  const updateReasonContext = useUpdateReasonContext();

  // ======================================================
  // RENDER
  // ======================================================

  return (
    <EntityFormWizard<ReasonContextFormSchema, ReasonContext>
      initialData={initialData}
      redirect={redirect}
      config={reasonContextFormConfig}
      createMutation={createReasonContext}
      updateMutation={updateReasonContext}
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
