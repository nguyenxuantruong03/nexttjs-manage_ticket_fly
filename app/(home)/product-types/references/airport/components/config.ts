"use client";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { DraftEntity } from "@/components/daft/draft-config";

import { FlyAirportFormSchema, FlyAirportSchema } from "./schema/schema";

import { flyAirportDefaultValues } from "./form/default-values";

import { initFlyAirportFormValues } from "./form/init-value";

import { flyAirportSteps } from "./step/steps";

import { FlyAirport } from "@/types/product-types/references/airport/airport.types";
import { FlyAirportService } from "@/services/product-types/references/airport/client";

export type FlyAirportCreateInput = Parameters<
  typeof FlyAirportService.create
>[0];

export type FlyAirportUpdateInput = Parameters<
  typeof FlyAirportService.update
>[1];

export const flyAirportFormConfig: EntityFormWizardConfig<
  FlyAirportFormSchema,
  FlyAirport,
  FlyAirportCreateInput,
  FlyAirportUpdateInput
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
