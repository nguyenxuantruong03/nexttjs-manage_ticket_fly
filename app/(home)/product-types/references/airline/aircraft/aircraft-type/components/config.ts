"use client";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { DraftEntity } from "@/components/daft/draft-config";

import {
  FlyAircraftTypeFormSchema,
  FlyAircraftTypeSchema,
} from "./form/schema";

import { flyAircraftTypeDefaultValues } from "./form/default-values";

import { initFlyAircraftTypeFormValues } from "./form/init-value";

import { flyAircraftTypeSteps } from "./step/steps";

import { FlyAircraftType } from "@/types/product-types/references/airline/aircraft/aircraft-type.type";

export const flyAircraftTypeFormConfig: EntityFormWizardConfig<
  FlyAircraftTypeFormSchema,
  FlyAircraftType
> = {
  schema: FlyAircraftTypeSchema,

  defaultValues: flyAircraftTypeDefaultValues,

  initValues: initFlyAircraftTypeFormValues,

  steps: flyAircraftTypeSteps,

  draftEntity: DraftEntity.FlyAircraftType,

  messages: {
    create: "Fly aircraft type created",

    update: "Fly aircraft type updated",
  },

  redirectDefault: "/product-types/references/airline/aircraft/aircraft-type",
};
