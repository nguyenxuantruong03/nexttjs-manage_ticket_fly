"use client";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { DraftEntity } from "@/components/daft/draft-config";

import { FlyCrewDutyFormSchema, FlyCrewDutySchema } from "./form/schema";

import { flyCrewDutyDefaultValues } from "./form/default-values";

import { initFlyCrewDutyFormValues } from "./form/init-value";

import { flyCrewDutySteps } from "./step/steps";

import { FlyCrewDuty } from "@/types/product-types/references/airline/crew/crew-duty/fly-crew-duty";

export const flyCrewDutyFormConfig: EntityFormWizardConfig<
  FlyCrewDutyFormSchema,
  FlyCrewDuty
> = {
  schema: FlyCrewDutySchema,

  defaultValues: flyCrewDutyDefaultValues,

  initValues: initFlyCrewDutyFormValues,

  steps: flyCrewDutySteps,

  draftEntity: DraftEntity.FlyCrewDuty,

  messages: {
    create: "Fly crew duty created",

    update: "Fly crew duty updated",
  },

  redirectDefault: "/product-types/ticket-fly/crew-duty",
};