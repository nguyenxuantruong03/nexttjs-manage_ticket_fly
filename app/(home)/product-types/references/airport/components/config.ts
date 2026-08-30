"use client";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { DraftEntity } from "@/components/daft/draft-config";

import { FlyAirportFormSchema, FlyAirportSchema } from "./schema/schema";

import { flyAirportDefaultValues } from "./form/default-values";

import { initFlyAirportFormValues } from "./form/init-value";

import { flyAirportSteps } from "./step/steps";

import { FlyAirport } from "@/types/product-types/references/airport/airport.types";

export const flyAirportFormConfig: EntityFormWizardConfig<
  FlyAirportFormSchema,
  FlyAirport
> = {
  schema: FlyAirportSchema,

  defaultValues: flyAirportDefaultValues,

  initValues: initFlyAirportFormValues,

  steps: flyAirportSteps,

  draftEntity: DraftEntity.FlyAirport,

  messages: {
    create: "FlyAirport created",

    update: "FlyAirport updated",
  },

  redirectDefault: "/ticket-fly/fly-aiport",
};
