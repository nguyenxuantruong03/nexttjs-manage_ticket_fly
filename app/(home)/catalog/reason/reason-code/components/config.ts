import { DraftEntity } from "@/components/daft/draft-config";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";


import { ReasonCodeFormSchema, schema } from "./form/schema";

import { reasonCodeDefaultValues } from "./form/default-values";

import { initReasonCodeFormValues } from "./form/init-value";

import { reasonCodeSteps } from "./step/steps";
import { ReasonCode } from "@/types/common/catalog/reason-code.type";

// ======================================================
// FORM CONFIG
// ======================================================

export const reasonCodeFormConfig: EntityFormWizardConfig<
  ReasonCodeFormSchema,
  ReasonCode
> = {
  schema,
  defaultValues: reasonCodeDefaultValues,
  initValues: initReasonCodeFormValues,
  steps: reasonCodeSteps,
  draftEntity: DraftEntity.ReasonCode,
  messages: {
    create: "Reason code created",
    update: "Reason code updated",
  },
  redirectDefault: "/catalog/reason/reason-code",
};
