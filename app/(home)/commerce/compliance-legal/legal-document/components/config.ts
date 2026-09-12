import { DraftEntity } from "@/components/daft/draft-config";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { LegalDocumentFormSchema, schema } from "./form/schema";

import { legalDocumentDefaultValues } from "./form/default-values";

import { initLegalDocumentFormValues } from "./form/init-value";

import { legalDocumentSteps } from "./step/steps";
import { LegalDocument } from "@/types/common/commerce/compliance-legal.type";

export const legalDocumentFormConfig: EntityFormWizardConfig<
  LegalDocumentFormSchema,
  LegalDocument
> = {
  schema,

  defaultValues: legalDocumentDefaultValues,

  initValues: initLegalDocumentFormValues,

  steps: legalDocumentSteps,

  draftEntity: DraftEntity.LegalDocument,

  messages: {
    create: "Legal document created",

    update: "Legal document updated",
  },

  redirectDefault: "/compliance-legal/legal-document",
};
