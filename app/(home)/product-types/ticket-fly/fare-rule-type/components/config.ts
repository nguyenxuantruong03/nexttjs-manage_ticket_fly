"use client";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { DraftEntity } from "@/components/daft/draft-config";

import {
  FlyFareRuleTypeFormSchema,
  FlyFareRuleTypeSchema,
} from "./form/schema";

import { flyFareRuleTypeDefaultValues } from "./form/default-values";

import { initFlyFareRuleTypeFormValues } from "./form/init-value";

import { flyFareRuleTypeSteps } from "./step/steps";

import { FlyFareRuleType } from "@/types/product-types/ticket-fly/pricing/fare-rule-type";

export const flyFareRuleTypeFormConfig: EntityFormWizardConfig<
  FlyFareRuleTypeFormSchema,
  FlyFareRuleType
> = {
  schema: FlyFareRuleTypeSchema,

  defaultValues: flyFareRuleTypeDefaultValues,

  initValues: initFlyFareRuleTypeFormValues,

  steps: flyFareRuleTypeSteps,

  draftEntity: DraftEntity.FlyFareRuleType,

  messages: {
    create: "Fly fare rule type created",

    update: "Fly fare rule type updated",
  },

  redirectDefault: "/product-types/ticket-fly/fare-rule-type",
};