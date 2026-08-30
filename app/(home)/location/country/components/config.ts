import { DraftEntity } from "@/components/daft/draft-config";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { Country } from "@/types/location/country/country";

import { CountryFormSchema, CountrySchema } from "./form/schema";

import { countryDefaultValues } from "./form/default-values";

import { initCountryFormValues } from "./form/init-value";

import { countrySteps } from "./step/steps";

export const countryFormConfig: EntityFormWizardConfig<
  CountryFormSchema,
  Country
> = {
  schema: CountrySchema,

  defaultValues: countryDefaultValues,

  initValues: initCountryFormValues,

  steps: countrySteps,

  draftEntity: DraftEntity.Country,

  messages: {
    create: "Country created",

    update: "Country updated",
  },

  redirectDefault: "/country",
};
