import { DraftEntity } from "@/components/daft/draft-config";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { Coupon } from "@/types/common/commerce/coupon";

import { CouponFormSchema, schema } from "./form/schema";

import { couponDefaultValues } from "./form/default-values";

import { initCouponFormValues } from "./form/init-value";

import { couponSteps } from "./step/steps";

export const couponFormConfig: EntityFormWizardConfig<
  CouponFormSchema,
  Coupon
> = {
  schema,

  defaultValues: couponDefaultValues,

  initValues: initCouponFormValues,

  steps: couponSteps,

  draftEntity: DraftEntity.Coupon,

  messages: {
    create: "Coupon created",

    update: "Coupon updated",
  },

  redirectDefault: "/commerce/coupon",
};
