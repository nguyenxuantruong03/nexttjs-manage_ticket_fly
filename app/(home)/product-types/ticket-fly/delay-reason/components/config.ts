"use client";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { DraftEntity } from "@/components/daft/draft-config";

import {
  FlyDelayReasonFormSchema,
  FlyDelayReasonSchema,
} from "./form/schema";

import { flyDelayReasonDefaultValues } from "./form/default-values";

import { initFlyDelayReasonFormValues } from "./form/init-value";

import { flyDelayReasonSteps } from "./step/steps";

import { FlyDelayReason } from "@/types/product-types/ticket-fly/fly-delay-reason";

export const flyDelayReasonFormConfig: EntityFormWizardConfig<
  FlyDelayReasonFormSchema,
  FlyDelayReason
> = {
  schema: FlyDelayReasonSchema,

  defaultValues: flyDelayReasonDefaultValues,

  initValues: initFlyDelayReasonFormValues,

  steps: flyDelayReasonSteps,

  draftEntity: DraftEntity.FlyDelayReason,

  messages: {
    create: "Fly delay reason created",

    update: "Fly delay reason updated",
  },

  redirectDefault: "/product-types/ticket-fly/delay-reason",
};