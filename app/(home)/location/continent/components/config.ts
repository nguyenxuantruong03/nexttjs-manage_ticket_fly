import { DraftEntity } from "@/components/daft/draft-config";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { Continent } from "@/types/location/country/continent.type";

import { ContinentFormSchema, ContinentSchema } from "./form/schema";

import { continentDefaultValues } from "./form/default-values";

import { initContinentFormValues } from "./form/init-value";

import { continentSteps } from "./step/steps";

export const continentFormConfig: EntityFormWizardConfig<
  ContinentFormSchema,
  Continent
> = {
  schema: ContinentSchema,

  defaultValues: continentDefaultValues,

  initValues: initContinentFormValues,

  steps: continentSteps,

  draftEntity: DraftEntity.Continent,

  messages: {
    create: "Continent created",

    update: "Continent updated",
  },

  redirectDefault: "/location/continent",
};
