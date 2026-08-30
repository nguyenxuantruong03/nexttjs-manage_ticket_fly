"use client";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { DraftEntity } from "@/components/daft/draft-config";

import { MealPlanSchema, MealPlanFormSchema } from "./form/schema";

import { mealPlanDefaultValues } from "./form/default-values";

import { initMealPlanFormValues } from "./form/init-value";

import { mealPlanSteps } from "./step/steps";

import { MealPlan } from "@/types/product-types/hotel/pricing/rate-plan.types";

export const mealPlanFormConfig: EntityFormWizardConfig<
  MealPlanFormSchema,
  MealPlan
> = {
  schema: MealPlanSchema,

  defaultValues: mealPlanDefaultValues,

  initValues: initMealPlanFormValues,

  steps: mealPlanSteps,

  draftEntity: DraftEntity.HotelMealPlan,

  messages: {
    create: "MealPlan created",

    update: "MealPlan updated",
  },

  redirectDefault: "hotel/meal-plan",
};
