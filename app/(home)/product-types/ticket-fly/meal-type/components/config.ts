"use client";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { DraftEntity } from "@/components/daft/draft-config";

import { FlyMealTypeFormSchema, FlyMealTypeSchema } from "./form/schema";

import { flyMealTypeDefaultValues } from "./form/default-values";

import { initFlyMealTypeFormValues } from "./form/init-value";

import { flyMealTypeSteps } from "./step/steps";

import { FlyMealType } from "@/types/product-types/ticket-fly/fly-meal-type";

export const flyMealTypeFormConfig: EntityFormWizardConfig<
  FlyMealTypeFormSchema,
  FlyMealType
> = {
  schema: FlyMealTypeSchema,

  defaultValues: flyMealTypeDefaultValues,

  initValues: initFlyMealTypeFormValues,

  steps: flyMealTypeSteps,

  draftEntity: DraftEntity.FlyMealType,

  messages: {
    create: "Fly meal type created",

    update: "Fly meal type updated",
  },

  redirectDefault: "/product-types/ticket-fly/meal-type",
};
