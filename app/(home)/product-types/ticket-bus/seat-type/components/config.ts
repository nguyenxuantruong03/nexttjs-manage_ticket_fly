"use client";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { DraftEntity } from "@/components/daft/draft-config";

import { BusSeatTypeSchema, BusSeatTypeFormSchema } from "./form/schema";

import { busSeatTypeDefaultValues } from "./form/default-values";

import { initBusSeatTypeFormValues } from "./form/init-value";

import { busSeatTypeSteps } from "./step/steps";

import { BusSeatType } from "@/types/product-types/bus/bus-seat-type";

export const busSeatTypeFormConfig: EntityFormWizardConfig<
  BusSeatTypeFormSchema,
  BusSeatType
> = {
  schema: BusSeatTypeSchema,

  defaultValues: busSeatTypeDefaultValues,

  initValues: initBusSeatTypeFormValues,

  steps: busSeatTypeSteps,

  draftEntity: DraftEntity.BusSeatType,

  messages: {
    create: "Bus seat type created",

    update: "Bus seat type updated",
  },

  redirectDefault: "/product-types/bus/seat-type",
};
