"use client";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { DraftEntity } from "@/components/daft/draft-config";

import { YachtConditionSchema, YachtConditionFormSchema } from "./form/schema";

import { yachtConditionDefaultValues } from "./form/default-values";

import { initYachtConditionFormValues } from "./form/init-value";

import { yachtConditionSteps } from "./step/steps";

import { YachtCondition } from "@/types/product-types/yacht/yacht-condition";

export const yachtConditionFormConfig: EntityFormWizardConfig<
  YachtConditionFormSchema,
  YachtCondition
> = {
  schema: YachtConditionSchema,

  defaultValues: yachtConditionDefaultValues,

  initValues: initYachtConditionFormValues,

  steps: yachtConditionSteps,

  draftEntity: DraftEntity.YachtCondition,

  messages: {
    create: "Yacht condition created",

    update: "Yacht condition updated",
  },

  redirectDefault: "yacht/condition",
};
