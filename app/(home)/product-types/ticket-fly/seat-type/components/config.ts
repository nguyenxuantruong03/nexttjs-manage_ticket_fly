"use client";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { DraftEntity } from "@/components/daft/draft-config";

import { FlySeatTypeFormSchema, FlySeatTypeSchema } from "./form/schema";

import { flySeatTypeDefaultValues } from "./form/default-values";

import { initFlySeatTypeFormValues } from "./form/init-value";

import { flySeatTypeSteps } from "./step/steps";

import { FlySeatType } from "@/types/product-types/ticket-fly/fly-seat-type";

export const flySeatTypeFormConfig: EntityFormWizardConfig<
  FlySeatTypeFormSchema,
  FlySeatType
> = {
  schema: FlySeatTypeSchema,

  defaultValues: flySeatTypeDefaultValues,

  initValues: initFlySeatTypeFormValues,

  steps: flySeatTypeSteps,

  draftEntity: DraftEntity.FlySeatType,

  messages: {
    create: "Fly seat type created",

    update: "Fly seat type updated",
  },

  redirectDefault: "/product-types/ticket-fly/seat-type",
};