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
import { FlyAirlineService } from "@/services/product-types/references/airline/client";

export type FlyAirlineCreateInput = Parameters<
  typeof FlyAirlineService.create
>[0];

export type FlyAirlineUpdateInput = Parameters<
  typeof FlyAirlineService.update
>[1];

export const flyAirlineFormConfig: EntityFormWizardConfig<
  FlyAirlineFormSchema,
  FlyAirline,
  FlyAirlineCreateInput,
  FlyAirlineUpdateInput
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
