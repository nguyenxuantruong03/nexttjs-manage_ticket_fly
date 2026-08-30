"use client";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { DraftEntity } from "@/components/daft/draft-config";

import { DiningMealTypeSchema, DiningMealTypeFormSchema } from "./form/schema";

import { diningMealTypeDefaultValues } from "./form/default-values";

import { initDiningMealTypeFormValues } from "./form/init-value";

import { diningMealTypeSteps } from "./step/steps";

import { DiningMealType } from "@/types/product-types/hotel/service/dinner-option.type";

export const diningMealTypeFormConfig: EntityFormWizardConfig<
  DiningMealTypeFormSchema,
  DiningMealType
> = {
  schema: DiningMealTypeSchema,

  defaultValues: diningMealTypeDefaultValues,

  initValues: initDiningMealTypeFormValues,

  steps: diningMealTypeSteps,

  draftEntity: DraftEntity.HotelDiningMealType,

  messages: {
    create: "DiningMealType created",
    update: "DiningMealType updated",
  },

  redirectDefault: "hotel/dining-meal-type",
};
