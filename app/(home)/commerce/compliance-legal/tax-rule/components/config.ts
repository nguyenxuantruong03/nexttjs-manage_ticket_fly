import { DraftEntity } from "@/components/daft/draft-config";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { TaxRuleFormSchema, schema } from "./form/schema";

import { taxRuleDefaultValues } from "./form/default-values";

import { initTaxRuleFormValues } from "./form/init-value";

import { taxRuleSteps } from "./step/steps";
import { TaxRule } from "@/types/common/commerce/compliance-legal.type";

// ======================================================
// FORM CONFIG
// ======================================================

export const taxRuleFormConfig: EntityFormWizardConfig<
  TaxRuleFormSchema,
  TaxRule
> = {
  schema,

  defaultValues: taxRuleDefaultValues,

  initValues: initTaxRuleFormValues,

  steps: taxRuleSteps,

  draftEntity: DraftEntity.TaxRule,

  messages: {
    create: "Tax rule created",

    update: "Tax rule updated",
  },

  redirectDefault: "/commerce/compliance-legal/tax-rule",
};
