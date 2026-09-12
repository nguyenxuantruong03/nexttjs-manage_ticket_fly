import { DraftEntity } from "@/components/daft/draft-config";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { RegulationFormSchema, schema } from "./form/schema";

import { regulationDefaultValues } from "./form/default-values";

import { initRegulationFormValues } from "./form/init-value";

import { regulationSteps } from "./step/steps";
import { Regulation } from "@/types/common/commerce/compliance-legal.type";

// ======================================================
// FORM CONFIG
// ======================================================

export const regulationFormConfig: EntityFormWizardConfig<
  RegulationFormSchema,
  Regulation
> = {
  schema,

  defaultValues: regulationDefaultValues,

  initValues: initRegulationFormValues,

  steps: regulationSteps,

  draftEntity: DraftEntity.Regulation,

  messages: {
    create: "Regulation created",

    update: "Regulation updated",
  },

  redirectDefault: "/commerce/compliance-legal/regulation",
};
