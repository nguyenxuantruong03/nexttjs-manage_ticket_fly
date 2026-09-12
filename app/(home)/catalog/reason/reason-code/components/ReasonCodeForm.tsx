"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import { ReasonCodeFormSchema } from "./form/schema";

import BasicStep from "./step/basic.step";

import ContextStep from "./step/context.step";

import StatusStep from "./step/status.step";
import { reasonCodeFormConfig } from "./config";
import {
  ReasonCode,
  ReasonContext,
} from "@/types/common/catalog/reason-code.type";
import {
  useCreateReasonCode,
  useUpdateReasonCode,
} from "@/hooks/catalog/reason/reason-code";

// ======================================================
// PROPS
// ======================================================

interface ReasonCodeFormProps {
  initialData?: ReasonCode;

  contextData: ReasonContext[];

  redirect?: boolean;
}

// ======================================================
// COMPONENT
// ======================================================

export default function ReasonCodeForm({
  initialData,

  contextData,

  redirect = true,
}: ReasonCodeFormProps) {
  // ======================================================
  // MUTATIONS
  // ======================================================

  const createReasonCode = useCreateReasonCode();

  const updateReasonCode = useUpdateReasonCode();

  // ======================================================
  // RENDER
  // ======================================================

  return (
    <EntityFormWizard<ReasonCodeFormSchema, ReasonCode>
      initialData={initialData}
      redirect={redirect}
      config={reasonCodeFormConfig}
      createMutation={createReasonCode}
      updateMutation={updateReasonCode}
    >
      {/* ======================================================
          STEP 0 - BASIC
      ====================================================== */}

      <FormWizardStep index={0}>
        <BasicStep />
      </FormWizardStep>

      {/* ======================================================
          STEP 1 - CONTEXT
      ====================================================== */}

      <FormWizardStep index={1}>
        <ContextStep contextData={contextData} />
      </FormWizardStep>

      {/* ======================================================
          STEP 2 - STATUS
      ====================================================== */}

      <FormWizardStep index={2}>
        <StatusStep />
      </FormWizardStep>
    </EntityFormWizard>
  );
}
