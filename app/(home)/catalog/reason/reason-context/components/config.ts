import { DraftEntity } from "@/components/daft/draft-config";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { ReasonContextFormSchema, schema } from "./form/schema";

import { reasonContextDefaultValues } from "./form/default-values";

import { initReasonContextFormValues } from "./form/init-value";

import { reasonContextSteps } from "./step/steps";
import { ReasonContext } from "@/types/common/catalog/reason-code.type";

// ======================================================
// FORM CONFIG
// ======================================================

export const reasonContextFormConfig: EntityFormWizardConfig<
  ReasonContextFormSchema,
  ReasonContext
> = {
  schema,
  defaultValues: reasonContextDefaultValues,
  initValues: initReasonContextFormValues,
  steps: reasonContextSteps,
  draftEntity: DraftEntity.ReasonContext,
  messages: {
    create: "Reason context created",
    update: "Reason context updated",
  },
  redirectDefault: "/catalog/reason/reason-context",
};
