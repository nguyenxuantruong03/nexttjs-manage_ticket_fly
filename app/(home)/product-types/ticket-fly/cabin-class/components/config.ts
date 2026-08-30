"use client";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { DraftEntity } from "@/components/daft/draft-config";

import { FlyCabinClassFormSchema, FlyCabinClassSchema } from "./form/schema";

import { flyCabinClassDefaultValues } from "./form/default-values";

import { initFlyCabinClassFormValues } from "./form/init-value";

import { flyCabinClassSteps } from "./step/steps";

import { FlyCabinClass } from "@/types/product-types/ticket-fly/fly-cabin-class";

export const flyCabinClassFormConfig: EntityFormWizardConfig<
  FlyCabinClassFormSchema,
  FlyCabinClass
> = {
  schema: FlyCabinClassSchema,

  defaultValues: flyCabinClassDefaultValues,

  initValues: initFlyCabinClassFormValues,

  steps: flyCabinClassSteps,

  draftEntity: DraftEntity.FlyCabinClass,

  messages: {
    create: "Fly cabin class created",

    update: "Fly cabin class updated",
  },

  redirectDefault: "/product-types/ticket-fly/cabin-class",
};
