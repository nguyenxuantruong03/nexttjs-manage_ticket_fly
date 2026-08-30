import { DraftEntity } from "@/components/daft/draft-config";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { PromotionRule } from "@/types/common/commerce/promotion/promotion-rule";

import { PromotionRuleFormSchema, schema } from "./form/schema";

import { promotionRuleDefaultValues } from "./form/default-values";

import { initPromotionRuleFormValues } from "./form/init-value";

import { promotionRuleSteps } from "./step/steps";

export const promotionRuleFormConfig: EntityFormWizardConfig<
  PromotionRuleFormSchema,
  PromotionRule
> = {
  schema,

  defaultValues: promotionRuleDefaultValues,

  initValues: initPromotionRuleFormValues,

  steps: promotionRuleSteps,

  draftEntity: DraftEntity.PromotionRule,

  messages: {
    create: "Promotion rule created",

    update: "Promotion rule updated",
  },

  redirectDefault: "/commerce/promotion-rule",
};
