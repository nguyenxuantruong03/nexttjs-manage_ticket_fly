import { DraftEntity } from "@/components/daft/draft-config";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { Currency } from "@/types/location/currency";

import { CurrencyFormSchema, schema } from "./form/schema";

import { currencyDefaultValues } from "./form/default-values";

import { initCurrencyFormValues } from "./form/init-value";

import { currencySteps } from "./step/steps";

export const currencyFormConfig: EntityFormWizardConfig<
  CurrencyFormSchema,
  Currency
> = {
  schema,

  defaultValues: currencyDefaultValues,

  initValues: initCurrencyFormValues,

  steps: currencySteps,

  draftEntity: DraftEntity.Currency,

  messages: {
    create: "Currency created",

    update: "Currency updated",
  },

  redirectDefault: "/currency",
};
