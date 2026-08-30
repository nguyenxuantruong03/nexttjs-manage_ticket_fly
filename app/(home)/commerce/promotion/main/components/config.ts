import { DraftEntity } from "@/components/daft/draft-config";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { Promotion } from "@/types/common/commerce/promotion/promotion";

import { PromotionFormSchema, schema } from "./form/schema";

import { promotionDefaultValues } from "./form/default-values";

import { initPromotionFormValues } from "./form/init-value";

import { promotionSteps } from "./step/steps";

export const promotionFormConfig: EntityFormWizardConfig<
  PromotionFormSchema,
  Promotion
> = {
  schema,

  defaultValues: promotionDefaultValues,

  initValues: initPromotionFormValues,

  steps: promotionSteps,

  draftEntity: DraftEntity.Promotion,

  messages: {
    create: "Promotion created",

    update: "Promotion updated",
  },

  redirectDefault: "/commerce/promotion",
};
