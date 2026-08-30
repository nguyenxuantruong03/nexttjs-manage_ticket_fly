import { DraftEntity } from "@/components/daft/draft-config";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { Timezone } from "@/types/location/timezone";

import { TimezoneFormSchema, TimezoneSchema } from "./form/schema";

import { timezoneDefaultValues } from "./form/default-values";

import { initTimezoneFormValues } from "./form/init-value";

import { timezoneSteps } from "./step/steps";

export const timezoneFormConfig: EntityFormWizardConfig<
  TimezoneFormSchema,
  Timezone
> = {
  schema: TimezoneSchema,

  defaultValues: timezoneDefaultValues,

  initValues: initTimezoneFormValues,

  steps: timezoneSteps,

  draftEntity: DraftEntity.Timezone,

  messages: {
    create: "Timezone created",

    update: "Timezone updated",
  },

  redirectDefault: "/timezone",
};