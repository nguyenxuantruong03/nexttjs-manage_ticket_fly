import { DraftEntity } from "@/components/daft/draft-config";
import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { City } from "@/types/location/city";

import { CityFormSchema, CitySchema } from "./form/schema";
import { cityDefaultValues } from "./form/default-values";
import { initCityFormValues } from "./form/init-value";
import { citySteps } from "./step/steps";

export const cityFormConfig: EntityFormWizardConfig<CityFormSchema, City> = {
  schema: CitySchema,

  defaultValues: cityDefaultValues,

  initValues: initCityFormValues,

  steps: citySteps,

  draftEntity: DraftEntity.City,

  messages: {
    create: "City created",
    update: "City updated",
  },

  redirectDefault: "/city",
};
