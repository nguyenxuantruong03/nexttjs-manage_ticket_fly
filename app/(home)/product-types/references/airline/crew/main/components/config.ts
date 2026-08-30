"use client";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { DraftEntity } from "@/components/daft/draft-config";

import {
  FlyCrewFormSchema,
  FlyCrewSchema,
} from "./schema/crew.schema";

import { flyCrewDefaultValues } from "./form/default-values";

import { initFlyCrewFormValues } from "./form/init-value";

import { flyCrewSteps } from "./step/steps";

import { FlyCrew } from "@/types/product-types/references/airline/crew/crew.types";

export const flyCrewFormConfig: EntityFormWizardConfig<
  FlyCrewFormSchema,
  FlyCrew
> = {
  schema: FlyCrewSchema,

  defaultValues: flyCrewDefaultValues,

  initValues: initFlyCrewFormValues,

  steps: flyCrewSteps,

  draftEntity: DraftEntity.FlyCrew,

  messages: {
    create: "Fly crew created",

    update: "Fly crew updated",
  },

  redirectDefault: "/product-types/references/airline/crew/main",
};