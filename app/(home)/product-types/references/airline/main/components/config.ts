"use client";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { DraftEntity } from "@/components/daft/draft-config";

import {
  FlyAirlineFormSchema,
  FlyAirlineSchema,
} from "./schema/airline.schema";

import { flyAirlineDefaultValues } from "./form/default-values";

import { initFlyAirlineFormValues } from "./form/init-value";

import { flyAirlineSteps } from "./step/steps";

import { FlyAirline } from "@/types/product-types/references/airline/airline.types";

export const flyAirlineFormConfig: EntityFormWizardConfig<
  FlyAirlineFormSchema,
  FlyAirline
> = {
  schema: FlyAirlineSchema,

  defaultValues: flyAirlineDefaultValues,

  initValues: initFlyAirlineFormValues,

  steps: flyAirlineSteps,

  draftEntity: DraftEntity.FlyAirline,

  messages: {
    create: "Fly airline created",

    update: "Fly airline updated",
  },

  redirectDefault: "/product-types/references/airline/main",
};
