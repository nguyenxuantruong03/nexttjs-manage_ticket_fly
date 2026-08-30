// config.ts

"use client";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { DraftEntity } from "@/components/daft/draft-config";

import {
  DiningServiceTypeSchema,
  DiningServiceTypeFormSchema,
} from "./form/schema";

import { diningServiceTypeDefaultValues } from "./form/default-values";

import { initDiningServiceTypeFormValues } from "./form/init-value";

import { diningServiceTypeSteps } from "./step/steps";

import { DiningServiceType } from "@/types/product-types/hotel/service/dinner-option.type";

export const diningServiceTypeFormConfig: EntityFormWizardConfig<
  DiningServiceTypeFormSchema,
  DiningServiceType
> = {
  schema: DiningServiceTypeSchema,

  defaultValues: diningServiceTypeDefaultValues,

  initValues: initDiningServiceTypeFormValues,

  steps: diningServiceTypeSteps,

  draftEntity: DraftEntity.HotelDiningServiceType,

  messages: {
    create: "DiningServiceType created",

    update: "DiningServiceType updated",
  },

  redirectDefault: "hotel/dining-service-type",
};
