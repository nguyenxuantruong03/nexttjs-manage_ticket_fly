import { DraftEntity } from "@/components/daft/draft-config";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { PriceRuleType } from "@/types/common/commerce/price-rule-type.type";

import { PriceRuleTypeFormSchema, schema } from "./form/schema";

import { priceRuleTypeDefaultValues } from "./form/default-values";

import { initPriceRuleTypeFormValues } from "./form/init-value";

import { priceRuleTypeSteps } from "./step/steps";

export const priceRuleTypeFormConfig: EntityFormWizardConfig<
  PriceRuleTypeFormSchema,
  PriceRuleType
> = {
  schema,

  defaultValues: priceRuleTypeDefaultValues,

  initValues: initPriceRuleTypeFormValues,

  steps: priceRuleTypeSteps,

  draftEntity: DraftEntity.PriceRuleType,

  messages: {
    create: "Price rule type created",

    update: "Price rule type updated",
  },

  redirectDefault: "/commerce/price-rule-type",
};
