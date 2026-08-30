"use client";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { DraftEntity } from "@/components/daft/draft-config";

import { RatePlanTypeSchema, RatePlanTypeFormSchema } from "./form/schema";

import { ratePlanTypeDefaultValues } from "./form/default-values";

import { initRatePlanTypeFormValues } from "./form/init-value";

import { ratePlanTypeSteps } from "./step/steps";

import { HotelRatePlanType } from "@/types/product-types/hotel/pricing/rate-plan.types";

export const ratePlanTypeFormConfig: EntityFormWizardConfig<
  RatePlanTypeFormSchema,
  HotelRatePlanType
> = {
  schema: RatePlanTypeSchema,

  defaultValues: ratePlanTypeDefaultValues,

  initValues: initRatePlanTypeFormValues,

  steps: ratePlanTypeSteps,

  draftEntity: DraftEntity.HotelRatePlanType,

  messages: {
    create: "RatePlanType created",

    update: "RatePlanType updated",
  },

  redirectDefault: "hotel/rate-plan-type",
};
