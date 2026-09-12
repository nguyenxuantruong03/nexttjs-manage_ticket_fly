"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import BasicStep from "./step/basic.step";

import StatusStep from "./step/status.step";

import { legalDocumentFormConfig } from "./config";

import { LegalDocumentFormSchema } from "./form/schema";
import { LegalDocument } from "@/types/common/commerce/compliance-legal.type";
import {
  useCreateLegalDocument,
  useUpdateLegalDocument,
} from "@/hooks/commerce/compliance-legal/legal-document";

interface LegalDocumentFormProps {
  initialData?: LegalDocument;

  redirect?: boolean;
}

export default function LegalDocumentForm({
  initialData,
  redirect = true,
}: LegalDocumentFormProps) {
  const createLegalDocument = useCreateLegalDocument();

  const updateLegalDocument = useUpdateLegalDocument();

  return (
    <EntityFormWizard<LegalDocumentFormSchema, LegalDocument>
      initialData={initialData}
      redirect={redirect}
      config={legalDocumentFormConfig}
      createMutation={createLegalDocument}
      updateMutation={updateLegalDocument}
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
