"use client";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { DraftEntity } from "@/components/daft/draft-config";

import { flyAircraftDefaultValues } from "./form/default-values";

import { initFlyAircraftFormValues } from "./form/init-value";

import { flyAircraftSteps } from "./step/steps";

import {
  FlyAircraftFormSchema,
  FlyAircraftSchema,
} from "./schema/aircraft.schema";

import { FlyAircraft } from "@/types/product-types/references/airline/aircraft/aircraft.types";

export const flyAircraftFormConfig: EntityFormWizardConfig<
  FlyAircraftFormSchema,
  FlyAircraft
> = {
  schema: FlyAircraftSchema,

  defaultValues: flyAircraftDefaultValues,

  initValues: initFlyAircraftFormValues,

  steps: flyAircraftSteps,

  draftEntity: DraftEntity.FlyAircraft,

  messages: {
    create: "Fly aircraft created",

    update: "Fly aircraft updated",
  },

  redirectDefault: "/product-types/references/airline/aircraft",
};
